import React, { useState } from 'react';
import NavHeader from '../ui/NavHeader';
import ProgressSteps from '../ui/ProgressSteps.';
import Button from '../ui/Button';
import { Input } from '../ui/input';
import { COLORS } from '../../styles/custom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface LaunchCollectibleProps {
  onBack: () => void;
  onComplete: () => void;
}

const LaunchCollectible: React.FC<LaunchCollectibleProps> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState(0);
  const [collectibleName, setCollectibleName] = useState('');
  const [symbol, setSymbol] = useState('$ELON');
  const [category, setCategory] = useState('');
  const [imageGenerated, setImageGenerated] = useState(false);
  
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };
  
  const generateImage = () => {
    setImageGenerated(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavHeader title="Launch a Collectible" onBack={onBack} />
      
      <div className="px-4 pb-8 flex-1 flex flex-col">
        <ProgressSteps totalSteps={5} currentStep={step + 1} />
        
        {step === 0 && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[#C6B06C] text-2xl font-bold mb-2">Name of your Collectible</h2>
            
            <div className="mt-6">
              <label className="text-white mb-2 block">Collectible Name</label>
              <Input 
                value={collectibleName}
                onChange={(e) => setCollectibleName(e.target.value)}
                placeholder="Enter collectible name"
                className="bg-[#1E1E2D] text-white border-[#333] w-full"
              />
            </div>
            
            <div className="mt-auto pt-10">
              <Button
                primary
                label="Continue"
                onClick={nextStep}
                fullWidth
                disabled={!collectibleName}
              />
            </div>
          </div>
        )}
        
        {step === 1 && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[#C6B06C] text-2xl font-bold mb-2">Symbol</h2>
            <p className="text-gray-400">Auto-generated based on collectible name</p>
            
            <div className="mt-6">
              <label className="text-white mb-2 block">Collectible Symbol</label>
              <Input 
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="bg-[#1E1E2D] text-white border-[#333] w-full"
              />
            </div>
            
            <div className="mt-auto pt-10">
              <Button
                primary
                label="Continue"
                onClick={nextStep}
                fullWidth
              />
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[#C6B06C] text-2xl font-bold mb-2">Select Category</h2>
            <p className="text-gray-400">Choose a category that best describes your collectibles</p>
            
            <div className="mt-6">
              <label className="text-white mb-2 block">Collectible Name</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#1E1E2D] border border-[#333] rounded-lg py-3 px-4 text-white appearance-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a Category</option>
                  <option value="celebrity">Celebrity</option>
                  <option value="sports">Sports</option>
                  <option value="art">Art</option>
                  <option value="music">Music</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight color="white" size={16} />
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-10">
              <Button
                primary
                label="Continue"
                onClick={nextStep}
                fullWidth
              />
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[#C6B06C] text-2xl font-bold mb-2">AI-Generated Image</h2>
            <p className="text-gray-400">Our AI will generate a unique image for your collectible</p>
            
            <div className="mt-6 flex-1 flex flex-col items-center justify-center">
              <div className="w-full aspect-video border border-[#C6B06C] rounded-lg overflow-hidden flex items-center justify-center">
                {imageGenerated ? (
                  <div className="flex flex-col items-center">
                    <img 
                      src="/lovable-uploads/be8d58a8-a94e-4870-b03d-42865a27740a.png" 
                      alt="Generated collectible"
                      className="w-32 h-32 object-contain"
                    />
                    <p className="text-[#C6B06C] text-3xl font-bold mt-4">StreetX</p>
                  </div>
                ) : (
                  <Button
                    primary
                    label="Generate Image"
                    onClick={generateImage}
                  />
                )}
              </div>
            </div>
            
            <div className="mt-auto pt-10">
              <Button
                primary
                label="Continue"
                onClick={nextStep}
                fullWidth
                disabled={!imageGenerated}
              />
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[#C6B06C] text-2xl font-bold mb-2">Summary</h2>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value, idx) => (
                <div 
                  key={idx} 
                  className={`
                    border
                    border-gray-700
                    rounded-full
                    py-2
                    text-center
                    ${value === 5 ? 'bg-[#C6B06C] text-black' : 'text-white'}
                  `}
                >
                  {value} SOL / {value * 20}M
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-white text-lg mb-4">Supply Allocation</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">Minter (optional, locked for 90 days)</span>
                  </div>
                  <span className="text-white">10%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">Paired into Liquidity (LP on StreetX)</span>
                  </div>
                  <span className="text-white">10%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">StreetX Treasury</span>
                  </div>
                  <span className="text-white">10%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">Verifying Entity</span>
                  </div>
                  <span className="text-white">10%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">Locked for 90 days</span>
                  </div>
                  <span className="text-white">30%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">Immediate public sale</span>
                  </div>
                  <span className="text-white">30%</span>
                </div>
              </div>
              
              <div className="mt-4 mb-8">
                <div className="w-full aspect-square rounded-full bg-[#C6B06C] opacity-30"></div>
              </div>
              
              <div className="bg-[#1A1A1A] rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white">Ashiqur</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-white">$ASHIQ</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white"></span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Custom Fee:</span>
                    <span className="text-white">N/A</span>
                  </div>
                </div>
                
                <div className="h-px bg-gray-800 my-4"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mining Fee:</span>
                    <span className="text-white">2 SOL</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-bold text-white">Total:</span>
                    <span className="font-bold text-white">2 SOL</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-10">
              <Button
                primary
                label="Launch Collectible"
                onClick={nextStep}
                fullWidth
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchCollectible;
