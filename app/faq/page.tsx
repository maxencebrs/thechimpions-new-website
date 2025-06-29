import React from "react";

const faqs = [
  {
    question: "What are the Chimpions?",
    answer: "A collection of 222 unique 1/1 hand-drawn pixel NFTs on Solana. It's not just a project — it's a place to build, share, and grow.",
  },
  {
    question: "When did it launch?",
    answer: "January 31, 2022 — fully whitelisted at 0.22 SOL.",
  },
  {
    question: "Where can I buy one?",
    answer: (
      <span>
        👉 <a href="https://www.tensor.trade/trade/the_chimpions" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Tensor</a><br />
        👉 <a href="https://magiceden.io/marketplace/the_chimpions" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a>
      </span>
    ),
  },
  {
    question: "Who leads this?",
    answer: (
      <span>
        Every 6 months, the Chimpions elect the council. Any member of the CHIAO can run.<br />
        In April 2025, 8 members were elected to lead the Chimpions. In addition, an executive team of 3 members was appointed.<br />
        More here: <a href="https://chimpions.co/the-chiao" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">https://chimpions.co/the-chiao</a>
      </span>
    ),
  },
  {
    question: "Do Chimpions have rarity rankings?",
    answer: "Nope. Each one is 1/1. Rarity is in the eye of the beholder.",
  },
  {
    question: "Who is the Chimpions artist?",
    answer: (
      <span>
        All Chimpions have been hand-drawn by Zen0, Zulp, Brink and Rabbels.<br />
        All animations were created by @Katsu, with 10 collabs by @zeroX and @Duckyzz.
      </span>
    ),
  },
  {
    question: "What is the Treehouse?",
    answer: "A subcommunity for artists, collectors, and researchers. This is where thoughtful creation and signal-sharing happens.",
  },
  {
    question: "How do I get in the Treehouse?",
    answer: (
      <span>
        <ul className="list-disc list-inside">
          <li>Hold a Chimpion NFT</li>
          <li>Hold a TWS edition → <a href="https://magiceden.io/creators/the_chimpions" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a></li>
          <li>Or stake via The Chimpions validator → (insert twitter link)</li>
        </ul>
      </span>
    ),
  },
  {
    question: "What is a Solana validator?",
    answer: "TBD",
  },
  {
    question: "Why do we run a validator?",
    answer: "TBD",
  },
  {
    question: "Where are the The Chimpions holders located?",
    answer: (
      <span>
        All over the world — see <a href="https://konn3ct.xyz" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Konn3ct</a>
      </span>
    ),
  },
  {
    question: "What else should I know?",
    answer: (
      <span>
        The Chimpions are a tight-knit community.<br />
        Ask questions. Reach out to a Council Member. We're here to help.
      </span>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700 group">
              <summary className="cursor-pointer text-lg font-semibold text-white group-open:text-blue-400 transition-colors">
                {faq.question}
              </summary>
              <div className="mt-2 text-gray-300">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
} 