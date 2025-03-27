
import React from 'react';
import { Search, Menu } from 'lucide-react';
import Button from '../ui/Button';
import { COLORS } from '../../styles/custom';

interface TokenExplorerProps {
  onMint: () => void;
}

const TokenExplorer: React.FC<TokenExplorerProps> = ({ onMint }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="sticky top-0 bg-black border-b border-gray-800 z-10">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <Menu size={24} color="white" />
            <img 
              src="/lovable-uploads/be8d58a8-a94e-4870-b03d-42865a27740a.png" 
              alt="StreetX" 
              className="w-8 h-8" 
            />
          </div>
          <Button
            primary
            label="Mint Your First ICO"
            onClick={onMint}
            className="text-sm py-2"
          />
        </div>
        
        <div className="px-4 pb-4">
          <h1 className="text-white text-2xl font-bold">Token Explorer</h1>
          <p className="text-gray-400 text-sm">Browse and discover top tokens across various categories</p>
          
          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <select className="w-full bg-black border border-gray-700 rounded-full text-white py-2 px-4 pr-8 appearance-none">
                <option>All Tokens</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            
            <div className="relative flex-1">
              <select className="w-full bg-black border border-gray-700 rounded-full text-white py-2 px-4 pr-8 appearance-none">
                <option>↕ Market Cap</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-800">
          <span className="text-white">Token</span>
          <span className="text-white">Price</span>
        </div>
        
        <div className="border-b border-gray-800">
          <div className="py-4 flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/f84b0ba0-362a-47aa-b436-bdd2e3673b30.png" 
                alt="Bitcoin" 
                className="w-full h-full rounded-full" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Bitcoin</h3>
              <p className="text-gray-400 text-sm">BTC</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">$62,134.21</p>
              <p className="text-red-500 text-sm">-1.32%</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-800">
          <div className="py-4 flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/47cb9527-696f-44b7-8cb4-eb4601b7832c.png" 
                alt="Ethereum" 
                className="w-full h-full rounded-full" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Ethereum</h3>
              <p className="text-gray-400 text-sm">ETH</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">$3,450.78</p>
              <p className="text-green-500 text-sm">+2.54</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-800">
          <div className="py-4 flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/026d74cb-4171-489c-9b67-e99bf5098456.png" 
                alt="Solana" 
                className="w-full h-full rounded-full" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Solana</h3>
              <p className="text-gray-400 text-sm">SOL</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">$3,450.78</p>
              <p className="text-green-500 text-sm">+2.54</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-800">
          <div className="py-4 flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src="/lovable-uploads/e4385476-b3ec-4ed8-9d2b-ef8714fcb87e.png" 
                alt="Uniswap" 
                className="w-full h-full rounded-full" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Uniswap</h3>
              <p className="text-gray-400 text-sm">UNI</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">$3,450.78</p>
              <p className="text-green-500 text-sm">+2.54</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenExplorer;
