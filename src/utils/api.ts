import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import * as Linking from 'expo-linking';

interface TokenMetadata {
  name: string;
  symbol: string;
  category: string;
}

interface CreateMetadataResponse {
  success: boolean;
  image: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
}

/**
 * Create token metadata and generate AI image
 */
export async function createTokenMetadata(metadata: TokenMetadata): Promise<CreateMetadataResponse> {
  try {
    const body = {
      name: metadata.name,
      symbol: metadata.symbol,
      category: metadata.category,
    };

    console.log('body', body);

    const response = await axios.post('http://192.168.0.118:5000/api/v1/token/create-metadata', body);

    if (response.data.success) {
      return response.data; // Assuming response.data contains the result
    } else {
      throw new Error('Failed to create token metadata');
    }
  } catch (error) {
    console.error('Error creating token metadata:', error);
    throw error;
  }
}

/**
 * Login user with wallet address
 */
export async function loginUser(walletAddress: string): Promise<LoginResponse> {
  const body = { wallet: walletAddress };
  console.log('login body', body);
  try {
    const response = await fetch('http://192.168.0.118:5000/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

const NETWORK = clusterApiUrl('mainnet-beta');
const onSignTransactionRedirectLink = Linking.createURL('onSignTransaction');
const connection = new Connection(NETWORK);

const useSignTransaction = () => {
  const [dappKeyPair, setDappKeyPair] = useState<nacl.box.KeyPair | null>(null);
  const [session, setSession] = useState<string | undefined>();
  const [sharedSecret, setSharedSecret] = useState<Uint8Array | undefined>();

  useEffect(() => {
    // Initialize the dapp key pair and shared secret on mount
    const keyPair = nacl.box.keyPair();
    setDappKeyPair(keyPair);
    setSharedSecret(new Uint8Array(32)); // Set this according to your logic
    setSession('your_session_id'); // You should set this dynamically based on your session

    // Optionally, get Phantom Wallet Public Key dynamically
    // setPhantomWalletPublicKey(new PublicKey('YOUR_PHANTOM_WALLET_PUBLIC_KEY'));
  }, []);

  const useUniversalLinks = false;
  const buildUrl = (path: string, params: URLSearchParams) =>
    `${useUniversalLinks ? 'https://phantom.app/ul/' : 'phantom://'}v1/${path}?${params.toString()}`;

  const encryptPayload = (payload: any, sharedSecret?: Uint8Array) => {
    if (!sharedSecret) throw new Error('missing shared secret');

    const nonce = nacl.randomBytes(24);
    const encryptedPayload = nacl.box.after(Buffer.from(JSON.stringify(payload)), nonce, sharedSecret);

    return [nonce, encryptedPayload];
  };

  const createTransferTransaction = async (phantomWalletPublicKey: PublicKey) => {
    if (!phantomWalletPublicKey) throw new Error('missing public key from user');

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: phantomWalletPublicKey,
        toPubkey: phantomWalletPublicKey,
        lamports: 100, // Example: Sending 100 lamports, adjust as necessary
      })
    );
    transaction.feePayer = phantomWalletPublicKey;
    const anyTransaction: any = transaction;
    anyTransaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    return transaction;
  };

  const signTransaction = async (phantomWalletPublicKey: PublicKey) => {
    if (!dappKeyPair || !session || !sharedSecret) {
      throw new Error('Missing required information for signing');
    }

    const transaction = await createTransferTransaction(phantomWalletPublicKey);

    const serializedTransaction = bs58.encode(
      transaction.serialize({
        requireAllSignatures: false,
      })
    );

    const payload = {
      session,
      transaction: serializedTransaction,
    };

    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onSignTransactionRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });

    const url = buildUrl('signTransaction', params);
    Linking.openURL(url);
  };

  return {
    signTransaction,
  };
};

export { createTokenMetadata, loginUser, useSignTransaction };