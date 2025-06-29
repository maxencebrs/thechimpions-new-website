export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="https://twitter.com/thechimpions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Twitter
            </a>
            <a href="https://discord.gg/thechimpions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Discord
            </a>
            <a href="https://tensor.trade/trade/thechimpions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Tensor
            </a>
            <a href="https://magiceden.io/marketplace/thechimpions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Magic Eden
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            The Chimpions Foundation
          </div>
        </div>
      </div>
    </footer>
  );
} 