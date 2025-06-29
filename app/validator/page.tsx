export default function ValidatorPage() {
  // Placeholder values for dynamic stats
  const stats = [
    { label: 'APY', value: '6.2%' }, // Example value
    { label: 'Commission', value: '5%' },
    { label: 'Uptime', value: '99.9%' }, // Example value
    { label: 'Delegated SOL', value: '12,345' }, // Example value
    { label: 'Total Stakers', value: '222' }, // Example value
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Chimpions Validator</h1>
        <p className="text-xl text-gray-200">Stake with purpose. Secure the network. Grow the DAO.</p>
      </div>

      {/* Live Stats */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Live Stats</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 min-w-[160px] bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">How It Works</h2>
        <p className="text-gray-200 mb-2">
          When you delegate your SOL to The Chimpions validator, you're directly helping secure the network while supporting a values-driven DAO.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Stake directly to our validator via wallet</li>
          <li>Or swap to the LST token <b>ChimpSol</b></li>
        </ul>
      </div>

      {/* Why Stake with Chimpions */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Why Stake with Chimpions?</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Among the best APYs on Solana</li>
          <li>Access to the Treehouse sub-community</li>
          <li>Eligible for exclusive airdrops & editions</li>
          <li>Revenue helps fund DAO initiatives</li>
        </ul>
      </div>

      {/* Solana DeFi Integration */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Solana DeFi Integration</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li><b>Loopscale integration is live</b> with a 4x multiplier</li>
          <li>More integrations to come</li>
        </ul>
      </div>

      {/* How to Delegate */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">How to Delegate</h2>
        <p className="text-gray-200 mb-2">Simple in-wallet delegation supported.<br />Or use the Jupiter Terminal to swap SOL → ChimpSol directly here.</p>
      </div>

      {/* For Builders & Protocols */}
      <div className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">For Builders & Protocols</h2>
        <p className="text-gray-200">Want to integrate ChimpSol? Reach out to discuss incentives and support.</p>
      </div>
    </div>
  );
} 