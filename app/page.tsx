import Link from 'next/link';

// Mock KPI data
const kpis = [
  { name: 'Validator Stake', value: '1.2M SOL' },
  { name: 'DAO Monthly Revenue', value: '$25,000' },
  { name: 'Total DAO Treasury', value: '$1.5M' },
  { name: 'Treehouse Capital AUM', value: '$5M' },
  { name: 'Collection Floor Price', value: '15 SOL' },
];

const ecosystemLinks = [
    { href: "/the-chimpions", title: "The DAO", description: "Learn how the DAO works, and how to participate" },
    { href: "/gallery", title: "NFT Gallery", description: "Browse the 222 animated Chimpions" },
    { href: "/treehouse-capital", title: "Treehouse Capital", description: "See our investments & syndicate deals" },
    { href: "/the-treehouse", title: "The Treehouse", description: "Explore our creative lab and weekly editions" },
]

export default function Home() {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-white mb-4 font-display">
          Welcome to The Chimpions
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A values-first and art-driven DAO investing in builders, art and Web3 culture. A modern think tank on Solana.
        </p>
      </section>

      {/* KPIs Section */}
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {kpis.map(kpi => (
            <div key={kpi.name} className="kpi-box">
              <h3 className="text-2xl font-bold text-gold-accent">{kpi.value}</h3>
              <p className="text-sm text-gray-400">{kpi.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is The Chimpions Section */}
      <section className="text-center py-20 max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">What is The Chimpions?</h2>
        <div className="space-y-4 text-lg text-gray-300">
            <p>The Chimpions is a curated community of 222 holders using art and capital to build the future of on-chain culture.</p>
            <p>Every Chimpion is a 1/1 hand-animated NFT — your identity, your voice, your ticket to the Treehouse.</p>
            <p>As a holder, you help govern a living treasury, back emerging builders, and shape projects with real impact.</p>
        </div>
      </section>

      {/* Explore The Ecosystem Section */}
      <section className="w-full max-w-6xl py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Explore The Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemLinks.map(link => (
                <Link key={link.href} href={link.href} className="card-interactive p-6">
                    <h3 className="text-2xl font-bold mb-2">{link.title}</h3>
                    <p className="text-gray-400">{link.description}</p>
                </Link>
            ))}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta-container my-16 text-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Want to be a part of it?</h2>
        <p className="text-lg text-gray-300 mb-6">
          Join The Chimpions — buy an NFT, stake to our validator, or just vibe in the Treehouse.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.tensor.trade/trade/the_chimpions" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy on Tensor</a>
            <a href="https://magiceden.io/marketplace/the_chimpions" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy on Magic Eden</a>
            <Link href="/validator" className="btn-outline">Stake to the Validator</Link>
        </div>
      </section>
    </div>
  );
}
