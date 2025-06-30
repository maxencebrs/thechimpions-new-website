"use client";

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
        👉 <a href="https://www.tensor.trade/trade/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Tensor</a><br />
        👉 <a href="https://magiceden.io/marketplace/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a>
      </span>
    ),
  },
  {
    question: "Who leads this?",
    answer: "Every 6 months, the Chimpions elect the council. Any member of the CHIAO can run. In April 2025, 8 members were elected to lead the Chimpions. In addition, an executive team of 3 members was appointed.",
  },
  {
    question: "Do Chimpions have rarity rankings?",
    answer: "Nope. Each one is 1/1. Rarity is in the eye of the beholder.",
  },
  {
    question: "Who is the Chimpions artist?",
    answer: "All Chimpions have been hand-drawn by Zen0, Zulp, Brink and Rabbels. All animations were created by @Katsu, with 10 collabs by @zeroX and @Duckyzz.",
  },
  {
    question: "What is the Treehouse?",
    answer: "A subcommunity for artists, collectors, and researchers. This is where thoughtful creation and signal-sharing happens.",
  },
  {
    question: "How do I get in the Treehouse?",
    answer: (
        <span>
            - Hold a Chimpion NFT<br />
            - Hold a TWS edition → <a href="https://magiceden.io/creators/the_chimpions" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Magic Eden</a><br />
            - Or stake via The Chimpions validator → (insert twitter link)
        </span>
    ),
  },
  {
    question: "Where are the The Chimpions holders located?",
    answer: (
      <span>
        All over the world — see <a href="https://konn3ct.xyz" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Konn3ct</a>
      </span>
    ),
  },
  {
    question: "What else should I know?",
    answer: "The Chimpions are a tight-knit community. Ask questions. Reach out to a Council Member. We're here to help.",
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-300 mb-8 max-w-2xl">
        Answers to the most common questions about The Chimpions, our DAO, NFTs, validator, and more.
        If you're still unsure — hop in Discord, we'll help.
      </p>
      
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white bg-opacity-5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <div className="text-gray-300">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 