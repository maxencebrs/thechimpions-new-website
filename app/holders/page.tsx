"use client";
import React from "react";

// Mock data for demonstration; replace with real data from your database
const holders = [
  {
    id: 1,
    discord: "chimpion#1234",
    twitter: "@chimpion1",
    twitter_url: "https://twitter.com/chimpion1",
    pfp: "/window.svg",
    count: 3,
  },
  {
    id: 2,
    discord: "banana#5678",
    twitter: "@banana",
    twitter_url: "https://twitter.com/banana",
    pfp: "/window.svg",
    count: 1,
  },
  // Add more mock holders as needed
];

export default function HoldersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Holders</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Behind every great Chimpion is a great holder. Here's the community shaping the future of on-chain culture.
        </p>
      </div>

      {/* Holder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {holders.map((holder) => (
          <div key={holder.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
            <img
              src={holder.pfp}
              alt={holder.twitter}
              className="w-20 h-20 rounded-full mb-4 border-2 border-gray-700 object-cover"
              style={{ imageRendering: "pixelated" }}
            />
            <div className="mb-2 text-gray-100 font-semibold">{holder.discord}</div>
            <a
              href={holder.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mb-2"
            >
              {holder.twitter}
            </a>
            <div className="text-gray-300 text-sm">Chimpions owned: <span className="font-bold">{holder.count}</span></div>
          </div>
        ))}
        {holders.length === 0 && (
          <div className="col-span-full text-center text-gray-400">No holders found.</div>
        )}
      </div>
    </div>
  );
} 