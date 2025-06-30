"use client";
import React from "react";

export default function TheChimpions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">The Chimpions</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Art. Capital. Integrity.</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          The Chimpions is a curated collective shaping on-chain culture through creativity, governance, and real-world action.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300">
            To create a long-term, values-first community powered by art, creativity, and integrity.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Our Goals</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Elevate 1/1 art and bring back the true "non-fungible" spirit of NFTs</li>
            <li>• Build a meaningful presence on Solana through validator, alpha and collaboration</li>
            <li>• Create real value through investment, art, and network effects</li>
          </ul>
        </div>
      </div>

      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Core Activities</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Running a Solana validator to support the Solana ecosystem and grow our treasury</li>
          <li>• Curating an elite collector & builder community</li>
          <li>• Sharing curated alpha and opportunities with integrity</li>
          <li>• Supporting artists through collabs, IRL events & custom drops</li>
          <li>• Building tools (merch, digital assets) to help holders own their unique digital identity</li>
          <li>• Supporting builders by investing early and giving feedback</li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">About the NFT Collection</h2>
        <p className="text-gray-300 mb-4">
          The Chimpions is a 1/1 animated pixel art NFT collection of 222 hand-drawn pieces.<br />
          No generative layers, no fluff — every Chimpion is unique.
        </p>
        <p className="text-gray-300 mb-4">
          Launched in January 2022 (WL only, 0.22 SOL mint)<br />
          Available on <a href="https://www.tensor.trade/trade/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Tensor</a> and <a href="https://magiceden.io/marketplace/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a>
        </p>
        <p className="text-gray-300 mb-2">Holding a Chimpion gives you access to:</p>
        <ul className="space-y-1 text-gray-300 list-disc list-inside">
          <li>The Chimpions' private server</li>
          <li>DAO governance</li>
          <li>IRL events</li>
          <li>Exclusive alpha and opportunities</li>
          <li>Private investments via Treehouse Capital</li>
          <li>The Treehouse, art and research hub</li>
          <li>Upcoming merch drops</li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">DAO Structure & Governance</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">How the DAO Works</h3>
            <p className="text-gray-300 mb-4">
              The Chimpions DAO is collectively governed by its 222 NFT holders.<br />
              Each Chimpion gives you the right to vote, propose, build, and earn.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-1">Chimpions Council</h4>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• The DAO elects 9 Council Members every 6 months</li>
                  <li>• The Council manages the DAO treasury and approves Executive Team decisions</li>
                  <li>• Transactions require 5/9 multisig approvals via Squads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Executive Team</h4>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• The CEO is elected by the DAO every 6 months</li>
                  <li>• The CEO appoints 2 Executive members</li>
                  <li>• They are responsible for implementing initiatives and managing the DAO's operations and ventures</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">The Current Team</h3>
            <p className="text-gray-400 italic">Coming soon: Meet the council and executive team.</p>
            {/* TODO: Add council and exec team members here */}
          </div>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Ethos</h2>
        <p className="text-gray-300">Integrity and purpose drive The Chimpions forward.<br/>We build slow, we build real, and we always show up with intention.</p>
      </div>

      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Code of Conduct</h2>
        <p className="text-gray-300 mb-4">
          By joining The Chimpions community, you agree to follow the values and guidelines set by the CHIAO.<br />
          This Code of Conduct outlines the expected behavior for all members of The Chimpions. It is tacitly accepted by being part of this community.
        </p>
        <p className="text-gray-300 mb-4">
          We promote a respectful, family atmosphere, where everyone can contribute, grow, and thrive. Integrity and kindness are not optional — they're what makes this place special.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Expected</h3>
            <ul className="space-y-1 text-gray-300">
              <li>• Strive to be excellent to all people and help whenever possible</li>
              <li>• Treat each other with kindness and respect, and foster an inclusive environment</li>
              <li>• Remember your actions reflect on the whole Chimpions community, especially if you PFP a Chimpion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Not Expected</h3>
            <ul className="space-y-1 text-gray-300">
              <li>• Spamming, scamming, or deceiving</li>
              <li>• Discrimination or harassment</li>
              <li>• Market manipulation or unethical trading</li>
              <li>• Lending Chimpions for temporary benefit access</li>
              <li>• Sharing personal/confidential info without consent</li>
            </ul>
          </div>
        </div>
        
        <p className="text-gray-300 mt-6">
          Violations may lead to disciplinary actions, reviewed and voted on by the CHIAO.<br />
          Contact a Council member for any concerns or violations — do not escalate publicly.
        </p>
        <p className="text-gray-300 mt-2">
          Let's keep this space clean, thoughtful, and real.<br />
          Thanks for being here. :chimplover:
        </p>
      </div>
    </div>
  );
} 