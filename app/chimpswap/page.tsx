"use client";
import { useState } from "react";

// Mock data for swappable Chimpions
const swappableChimpions = [
  {
    id: 1,
    name: "Chimpion #7",
    image_url: "/window.svg",
    owner: "@holder7",
  },
  {
    id: 2,
    name: "Chimpion #13",
    image_url: "/window.svg",
    owner: "@holder13",
  },
];

export default function ChimpSwap() {
  const [selected, setSelected] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">ChimpSwap</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">The identity exchange. Don't just hold — become.</h2>
        <p className="text-gray-300 mb-6">
          ChimpSwap is a mechanism to help holders find the Chimpion they most identify with — and enable large holders to earn passive income by listing Chimpions as swappable.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Holders of multiple Chimpions can list some of their NFTs as "Swapable"</li>
            <li>• Any holder can visit ChimpSwap and choose a swappable Chimpion</li>
            <li>• A 1 SOL fee is charged for each swap</li>
            <li>• 75% goes to the original holder</li>
            <li>• 25% goes to the DAO treasury</li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Swap Interaction</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Connect your wallet</li>
            <li>• Select your current Chimpion</li>
            <li>• Select the one you want</li>
            <li>• Pay the fee and confirm the swap</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Gallery</h2>
        <p className="text-gray-300 mb-6">
          Displays all Chimpions listed as swappable. Click to preview. Wallet connection required to confirm swap.
        </p>
        
        {!walletConnected ? (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-4">Connect your wallet to view swappable Chimpions</p>
            <button 
              onClick={() => setWalletConnected(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swappableChimpions.map((chimpion) => (
              <div 
                key={chimpion.id} 
                className="bg-white bg-opacity-10 rounded-lg p-4 cursor-pointer hover:bg-opacity-20 transition-all"
                onClick={() => setSelected(chimpion)}
              >
                <div className="w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                  <img src={chimpion.image_url} alt={chimpion.name} className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{chimpion.name}</h3>
                <p className="text-gray-300 text-sm">{chimpion.owner}</p>
              </div>
            ))}
            {swappableChimpions.length === 0 && (
              <p className="text-gray-300 col-span-full text-center py-8">
                No Chimpions are currently available for swap.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 