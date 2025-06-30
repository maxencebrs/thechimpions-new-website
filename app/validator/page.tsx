export default function Validator() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">The Chimpions Validator</h1>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Stake with purpose. Secure the network. Grow the DAO.</h2>
        <p className="text-gray-300 mb-6">
          When you delegate your SOL to The Chimpions validator, you're directly helping secure the network while supporting a values-driven DAO.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">APY</h3>
            <p className="text-3xl font-bold text-green-400">~7.5%</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Commission</h3>
            <p className="text-3xl font-bold text-blue-400">5%</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
            <p className="text-3xl font-bold text-purple-400">99.9%</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Delegated SOL</h3>
            <p className="text-3xl font-bold text-yellow-400">12,345</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Total Stakers</h3>
            <p className="text-3xl font-bold text-pink-400">222</p>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            Stake Now
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <p className="text-gray-300 mb-4">
            You can either:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Stake directly to our validator via wallet</li>
            <li>• Or swap to the LST token <strong>ChimpSol</strong></li>
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Why Stake with Chimpions?</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Among the best APYs on Solana</li>
            <li>• Access to the Treehouse sub-community</li>
            <li>• Eligible for exclusive airdrops & editions</li>
            <li>• Revenue helps fund DAO initiatives</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Solana DeFi Integration</h2>
        <p className="text-gray-300 mb-4">
          ChimpSol is being integrated into the broader Solana DeFi ecosystem:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>• <strong>Loopscale integration is live</strong> with a 4x multiplier</li>
          <li>• More integrations to come</li>
        </ul>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">How to Delegate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-bold mb-2">Option 1: Stake directly in your wallet</h3>
                <p className="text-gray-400">Open Phantom, Backpack, Solflare, etc.</p>
                <p className="text-gray-400">Go to: Stake → Validators</p>
                <p className="text-gray-400">Search: Chimpions or paste validator address</p>
                <p className="text-gray-400">Choose amount and confirm</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">Option 2: Mint ChimpSol (Liquid Staking)</h3>
                <p className="text-gray-400 mb-4">Use our built-in Jupiter Terminal widget to swap SOL → ChimpSol. ChimpSol is composable and grows your yield over time.</p>
                <div className="bg-black/20 rounded-lg p-8 text-center">
                    <p className="text-white">Jupiter Terminal Widget Placeholder</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-5 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">For Builders & Protocols</h2>
        <p className="text-gray-300">
          Want to integrate ChimpSol? Reach out to discuss incentives and support.
        </p>
      </div>
    </div>
  );
} 