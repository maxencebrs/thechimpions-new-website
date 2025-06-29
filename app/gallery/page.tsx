"use client";
import { useState } from "react";

// Mock data for demonstration; replace with Supabase fetch in production
const mockNFTs = [
  {
    id: 1,
    name: "Chimpion #1",
    image_url: "/window.svg",
    holder_twitter: "@holder1",
    tribe: "Jungle",
    type: "Warrior",
  },
  {
    id: 2,
    name: "Chimpion #2",
    image_url: "/window.svg",
    holder_twitter: "@holder2",
    tribe: "Mountain",
    type: "Shaman",
  },
  // Add more mock NFTs as needed
];

const tribes = ["All", ...Array.from(new Set(mockNFTs.map((nft) => nft.tribe)))];
const types = ["All", ...Array.from(new Set(mockNFTs.map((nft) => nft.type)))];

export default function GalleryPage() {
  const [tribe, setTribe] = useState("All");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");

  const filteredNFTs = mockNFTs.filter((nft) => {
    const tribeMatch = tribe === "All" || nft.tribe === tribe;
    const typeMatch = type === "All" || nft.type === type;
    const searchMatch =
      nft.name.toLowerCase().includes(search.toLowerCase()) ||
      nft.holder_twitter.toLowerCase().includes(search.toLowerCase());
    return tribeMatch && typeMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">NFT Gallery</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          You've entered the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <select
          className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700"
          value={tribe}
          onChange={(e) => setTribe(e.target.value)}
        >
          {tribes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input
          type="text"
          className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 w-64"
          placeholder="Search by name or holder"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredNFTs.map((nft) => (
          <div key={nft.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-3 border-b border-gray-800 text-center">
              <span className="font-semibold text-gray-100">{nft.name}</span>
            </div>
            <div className="flex-1 flex items-center justify-center bg-black">
              <img
                src={nft.image_url}
                alt={nft.name}
                className="w-full h-48 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="flex justify-between items-center p-3 border-t border-gray-800 text-xs text-gray-400">
              <span>@{nft.holder_twitter.replace(/^@/, "")}</span>
              <span>{nft.tribe} / {nft.type}</span>
            </div>
          </div>
        ))}
        {filteredNFTs.length === 0 && (
          <div className="col-span-full text-center text-gray-400">No NFTs found.</div>
        )}
      </div>
    </div>
  );
} 