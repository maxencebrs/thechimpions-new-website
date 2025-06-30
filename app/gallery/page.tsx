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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-[Longsile]">NFT Gallery</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          You've entered the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name or holder..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-input flex-grow"
        />
        <select value={tribe} onChange={(e) => setTribe(e.target.value)} className="form-select">
          {tribes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="form-select">
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredNFTs.map(nft => (
          <div key={nft.id} className="card-interactive">
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <img src={nft.image_url} alt={nft.name} className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-bold text-white">{nft.name}</h3>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
              <span>{nft.holder_twitter}</span>
              <span>{nft.tribe} / {nft.type}</span>
            </div>
          </div>
        ))}
        {filteredNFTs.length === 0 && (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-400">No Chimpions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 