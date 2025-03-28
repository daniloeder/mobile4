import { PublicKey, Transaction, SystemProgram, Connection, sendAndConfirmTransaction } from "@solana/web3.js";

interface WalletAdapter {
    publicKey: PublicKey;
    signTransaction: (transaction: Transaction) => Promise<Transaction>;
    signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
    signMessage: (message: Uint8Array) => Promise<Uint8Array>;
}

/**
 * Send SOL to server wallet
 */
export async function sendSolToServer(
    wallet: WalletAdapter,
    serverWallet: PublicKey,
    solAmount: number
): Promise<string> {
    try {
        if (!wallet.publicKey) {
            throw new Error("Wallet not connected");
        }

        // Convert SOL to lamports
        const lamports = solAmount * 1000000000;

        // Connect to Solana cluster
        const connection = new Connection(
            "https://api.mainnet-beta.solana.com",
            "confirmed"
        );

        // Create transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: serverWallet,
                lamports,
            })
        );

        // Get recent blockhash
        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = wallet.publicKey;

        // Sign transaction
        const signedTransaction = await wallet.signTransaction(transaction);

        // Send transaction
        const signature = await connection.sendRawTransaction(
            signedTransaction.serialize()
        );

        // Wait for confirmation
        await connection.confirmTransaction(signature, "confirmed");

        return signature;
    } catch (error) {
        console.error("Error sending SOL:", error);
        throw error;
    }
}



