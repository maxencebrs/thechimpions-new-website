"use client";
import React from "react";

// Mock data for Portfolio Companies
const portfolio = [
  { id: 1, name: 'DoubleZero', website: '#', twitter: '#', logo: '/file.svg' },
  { id: 2, name: 'Carrot Defi', website: '#', twitter: '#', logo: '/file.svg' },
  { id: 3, name: 'Adrastea', website: '#', twitter: '#', logo: '/file.svg' },
]

export default function TreehouseCapital() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Treehouse Capital</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Backing founders, not hype.</h2>
        <p className="text-gray-300 mb-6">
          Treehouse Capital is The Chimpions' early-stage investment arm.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Our Strategy</h3>
          <p className="text-gray-300 mb-4">
            We invest in the earliest stages of great ideas — often before the public hears about them. Our edge comes from:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Deep involvement with builders</li>
            <li>• Real-time feedback from active users</li>
            <li>• The DAO's long-term alignment and vision</li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Fee Model</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>0% management fee</strong></li>
            <li>• <strong>15% carry</strong> on successful exits</li>
            <li>• Carry reduced to <strong>0% for contributors who bring deals</strong></li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Value for Founders</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• One single DAO entity on your cap table</li>
            <li>• Immediate exposure to high-signal investors and power users</li>
            <li>• Optional co-marketing, feedback, and support</li>
            <li className="pt-2 italic text-gray-400">• We're fast, founder-friendly, and deeply embedded in Solana.</li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Value for Chimpions</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Exclusive and curated deal access</li>
            <li>• Optional participation</li>
            <li>• Seamless token distribution</li>
            <li>• Upside shared with the DAO treasury</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Portfolio Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio.map((company) => (
            <div key={company.id} className="card-interactive flex items-center gap-4 p-4">
              <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12"/>
              <div>
                <h3 className="text-lg font-bold text-white">{company.name}</h3>
                <div className="flex gap-4">
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Website</a>
                  <a href={company.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Twitter</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-container text-center p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Pitch your forward-thinking idea</h2>
        <p className="text-gray-300 mb-6">
          Have a game-changing idea? We want to hear it. Use our submission form to share deal details.
        </p>
        <a href="#" className="btn-primary">
          Submission Form
        </a>
      </div>
    </div>
  );
} 