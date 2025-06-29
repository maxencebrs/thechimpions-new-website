import { supabase } from "@/lib/supabase";

async function getKPIs() {
  try {
    const { data, error } = await supabase.from('kpis').select('*');
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    return [];
  }
}

export default async function Home() {
  const kpis = await getKPIs();

  // Map KPI names to required display order
  const kpiOrder = [
    'Validator TVL',
    'Monthly revenue',
    'Total DAO treasury',
    'Total AUM',
    'Collection floor price',
  ];
  const orderedKpis = kpiOrder.map((name) => kpis.find((k) => k.name === name));

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-20 px-4 mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Brand Visual"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome to The Chimpions</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-2">
            a community-powered force of art, capital, and culture on Solana.<br />
            We're not just NFTs — we're a movement.
          </p>
        </div>
      </div>

      {/* Live Stats (KPIs) */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Live Stats</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            {orderedKpis.map((kpi, idx) => (
              <div
                key={kpi?.id || idx}
                className="flex-1 bg-gray-800 rounded-lg p-6 border border-gray-700 min-w-[180px] text-center"
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-2">{kpi?.name || '-'}</h3>
                <p className="text-3xl font-bold text-white mb-2">{kpi?.value ?? '-'}</p>
                {kpi?.description && (
                  <p className="text-sm text-gray-400">{kpi.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is The Chimpions */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">What is The Chimpions</h2>
        <p className="text-gray-200 max-w-2xl mb-4">
          The Chimpions is a curated community of 222 holders using art and capital to build the future of on-chain culture.
        </p>
        <p className="text-gray-200 max-w-2xl mb-4">
          Every Chimpion is a 1/1 hand-animated NFT — your identity, your voice, your ticket to the Treehouse.
        </p>
        <p className="text-gray-200 max-w-2xl">
          As a holder, you help govern a living treasury, back emerging creators, and shape projects with real-world impact.
        </p>
      </div>

      {/* DAO Revenue Streams */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">DAO Revenue Streams</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Validator Rewards</h3>
            <p className="text-gray-300">Revenue earned from staking SOL through The Chimpions validator. Pure revenue from delegations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">NFT Royalties</h3>
            <p className="text-gray-300">Set at 7% on secondary sales. These fund DAO initiatives and reward aligned creators.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Merch</h3>
            <p className="text-gray-300">Branded merch and 1/1 digital products made by and for the community.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Collect your Chimpion:</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="https://magiceden.io/marketplace/the_chimpions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Magic Eden
          </a>
          <a
            href="https://www.tensor.trade/trade/the_chimpions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Tensor
          </a>
        </div>
      </div>

      {/* Legal note for footer */}
      <div className="text-center text-xs text-gray-500 pb-4">
        The Chimpions is registered as a Foundation. Ownership and direction belong to the holders.
      </div>
    </div>
  );
}
