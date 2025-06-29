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

export default function ChimpSwapPage() {
  const [selected, setSelected] = useState<typeof swappableChimpions[0] | null>(null);
  const [walletConnected, setWalletConnected] = useState(false); // Placeholder

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">ChimpSwap</h1>
        <p className="text-xl text-gray-200">The identity exchange. Don't just hold — become.</p>
      </div>

      {/* What is ChimpSwap? */}
      <div className="mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">What is ChimpSwap?</h2>
        <p className="text-gray-200">
          ChimpSwap is a mechanism to help holders find the Chimpion they most identify with — and enable large holders to earn passive income by listing Chimpions as swappable.
        </p>
      </div>

      {/* How It Works */}
      <div className="mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">How It Works</h2>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Holders of multiple Chimpions can list some of their NFTs as "Swappable"</li>
          <li>Any holder can visit ChimpSwap and choose a swappable Chimpion</li>
          <li>A 1 SOL fee is charged for each swap</li>
        </ul>
        <ul className="list-disc list-inside text-gray-400 ml-6">
          <li>75% goes to the original holder</li>
          <li>25% goes to the DAO treasury</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Swappable Chimpions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {swappableChimpions.map((chimp) => (
            <div
              key={chimp.id}
              className={`bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col border-2 ${selected?.id === chimp.id ? 'border-blue-500' : 'border-gray-800'}`}
              onClick={() => setSelected(chimp)}
              style={{ cursor: 'pointer' }}
            >
              <div className="p-3 border-b border-gray-800 text-center">
                <span className="font-semibold text-gray-100">{chimp.name}</span>
              </div>
              <div className="flex-1 flex items-center justify-center bg-black">
                <img
                  src={chimp.image_url}
                  alt={chimp.name}
                  className="w-full h-40 object-contain"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              <div className="p-3 border-t border-gray-800 text-xs text-gray-400 text-left">
                Owner: @{chimp.owner.replace(/^@/, "")}
              </div>
            </div>
          ))}
        </div>
        {swappableChimpions.length === 0 && (
          <div className="text-center text-gray-400 mt-4">No swappable Chimpions listed.</div>
        )}
      </div>

      {/* Swap Interaction */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Swap Interaction</h2>
        <ol className="list-decimal list-inside text-gray-300 mb-4">
          <li>Connect your wallet</li>
          <li>Select your current Chimpion</li>
          <li>Select the one you want</li>
          <li>Pay the fee and confirm the swap</li>
        </ol>
        {!walletConnected ? (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
            onClick={() => setWalletConnected(true)}
          >
            Connect Wallet (placeholder)
          </button>
        ) : (
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
            disabled={!selected}
          >
            {selected ? `Swap for ${selected.name}` : 'Select a Chimpion to swap'}
          </button>
        )}
      </div>
    </div>
  );
} 