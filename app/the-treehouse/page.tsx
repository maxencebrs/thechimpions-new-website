"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Corrected and detailed edition data
const editions = [
  { id: 1, name: 'Forest Fellowship', artists: 'Matasatsu & Matabolong', handle: '@Matabolong', image: '/TWS Editions/forest_fellowship.png' },
  { id: 2, name: 'Dusk Till Dawn', artists: 'Nyaumon', handle: '@nyaumon', image: '/TWS Editions/dusk_till_dawn.png' },
  { id: 4, name: 'Last Bastion', artists: 'Neil Vilppu', handle: '@NeilVilppu', image: '/TWS Editions/LastBastion.jpg' },
  { id: 5, name: 'The Uprising', artists: 'UGS Labs', handle: '@UGS_Labs', image: '/TWS Editions/TheUprising.png' },
  { id: 6, name: 'Finale', artists: 'Laurence Antony', handle: '@laurence_antony', image: '/TWS Editions/Finale.png' },
  { id: 7, name: 'Crystal Companions', artists: 'The Knittables', handle: '@theKnittables', image: '/TWS Editions/CrystalCompanions.png' },
  { id: 8, name: 'Grave Danger', artists: 'Art by Nafay', handle: '@ArtbyNafay', image: '/TWS Editions/GraveDanger.png' },
  { id: 9, name: 'An Unlikely Friendship', artists: 'Tainaker', handle: '@Tainaker', image: '/TWS Editions/AnUnlikelyFriendship.png' },
  { id: 10, name: 'The Last Party', artists: 'Vaz', handle: null, image: '/TWS Editions/thelastparty.webp' }
];


export default function TheTreehouse() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">The Treehouse</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">An art and research center where signal thrives.</h2>
        <p className="text-gray-300 mb-6">
          The Treehouse is a sub-community focused on art and research. It's a space to share, learn, and co-create where every contributors are welcomed.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How to Get Access</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Staking via The Chimpions validator, see our <Link href="/validator" className="text-blue-400 hover:text-blue-300 underline">validator page</Link></li>
            <li>• Holding a Together We Stand edition: <a href="https://magiceden.io/creators/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a></li>
            <li>• Receiving an invitation as an exceptional contributor in the Solana space</li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Inside You'll Find</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>Art Center</strong> for sharing art alpha and amazing art pieces</li>
            <li>• <strong>Research Center</strong> for deep research on interesting projects</li>
            <li>• <strong>AI Center</strong> for experimentation and AI tooling</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">Together We Stand Editions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editions.map((edition) => (
            <div key={edition.id} className="card-interactive">
                <Image src={edition.image} alt={edition.name} width={400} height={400} className="rounded-t-lg w-full object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{edition.name}</h3>
                    <p className="text-sm text-gray-400">by {edition.artists}</p>
                    {edition.handle && <p className="text-sm text-blue-400">{edition.handle}</p>}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 