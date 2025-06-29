"use client";
import React from "react";

// Mock data for Treehouse Editions
const editions = [
  {
    id: 1,
    name: "TWS Edition #1",
    link: "https://magiceden.io/creators/the_chimpions",
  },
  {
    id: 2,
    name: "TWS Edition #2",
    link: "https://magiceden.io/creators/the_chimpions",
  },
];

export default function TheTreehousePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">The Treehouse</h1>
        <p className="text-xl text-gray-200">An art and research center where signal thrives.</p>
      </div>

      {/* About */}
      <div className="mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p className="text-gray-200 mb-4">
          The Treehouse is a sub-community focused on art and research. It's a space to share, learn, and co-create.
        </p>
        <h3 className="font-semibold mb-1">How to Get Access</h3>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Staking via The Chimpions validator directly in your wallet or by holding The Chimpions LST: (insert twitter link)</li>
          <li>Holding a Together We Stand edition: <a href="https://magiceden.io/creators/the_chimpions" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a></li>
          <li>Receiving an invitation as an exceptional contributor in the Solana space</li>
        </ul>
      </div>

      {/* Inside You'll Find */}
      <div className="mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Inside You'll Find</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li><b>Art Center</b> for sharing art alpha and amazing art pieces</li>
          <li><b>Research Center</b> for deep research on interesting projects</li>
          <li><b>AI Center</b> for experimentation and AI tooling</li>
        </ul>
      </div>

      {/* Editions */}
      <div className="mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Editions</h2>
        <ul className="list-disc list-inside text-gray-300">
          {editions.map((edition) => (
            <li key={edition.id}>
              <a href={edition.link} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                {edition.name}
              </a>
            </li>
          ))}
          {editions.length === 0 && <li>No editions found.</li>}
        </ul>
      </div>
    </div>
  );
} 