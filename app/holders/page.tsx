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

export default function Holders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Our Holders</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Behind every great Chimpion is a great holder.</h2>
        <p className="text-gray-300 mb-6">
          Here's the community shaping the future of on-chain culture.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {holders.map(holder => (
            <div key={holder.id} className="card-interactive p-4">
                <div className="flex items-center space-x-4">
                    <img src={holder.pfp} alt={holder.discord} className="w-16 h-16 rounded-full bg-gray-700"/>
                    <div>
                        <a href={holder.twitter_url} target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">{holder.twitter}</a>
                        <p className="text-sm text-gray-400">{holder.discord}</p>
                    </div>
                </div>
                <div className="mt-4 text-right">
                    <span className="text-sm bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                        Owns {holder.count}
                    </span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
} 