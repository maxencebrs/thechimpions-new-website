"use client";
import React from "react";

// Mock data for Highlighted Deals
const deals = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A next-gen DeFi protocol for Solana.",
  },
  {
    id: 2,
    name: "Builder Beta",
    description: "A new NFT infrastructure tool for creators.",
  },
];

export default function TreehouseCapitalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Treehouse Capital</h1>
        <p className="text-xl text-gray-200">Backing founders, not hype. Treehouse Capital is The Chimpions' early-stage investment arm.</p>
      </div>

      {/* Our Strategy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Our Strategy</h2>
        <p className="text-gray-200 mb-2">
          We invest in the earliest stages of great ideas — often before the public hears about them. Our edge comes from:
        </p>
        <ul className="list-disc list-inside text-gray-200">
          <li>Deep involvement with builders</li>
          <li>Real-time feedback from active users</li>
          <li>The DAO's long-term alignment and vision</li>
        </ul>
      </section>

      {/* Fee Model */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Fee Model</h2>
        <ul className="list-disc list-inside text-gray-200">
          <li><b>0% management fee</b></li>
          <li><b>15% carry</b> on successful exits</li>
          <li>Carry reduced to <b>0% for contributors who bring deals</b></li>
        </ul>
      </section>

      {/* Value for Founders */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Value for Founders</h2>
        <ul className="list-disc list-inside text-gray-200">
          <li>Single point of contact</li>
          <li>Clean cap table</li>
          <li>Access to early users and strong community</li>
        </ul>
      </section>

      {/* Value for Chimpions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Value for Chimpions</h2>
        <ul className="list-disc list-inside text-gray-200">
          <li>Exclusive deal access</li>
          <li>Optional participation</li>
          <li>Upside shared with the DAO treasury</li>
        </ul>
      </section>

      {/* Highlighted Deals */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Highlighted Deals</h2>
        <div className="space-y-4">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="font-semibold text-white mb-1">{deal.name}</div>
              <div className="text-gray-300">{deal.description}</div>
            </div>
          ))}
          {deals.length === 0 && <div className="text-gray-400">No deals highlighted yet.</div>}
        </div>
      </section>
    </div>
  );
} 