import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'The Treehouse', href: '/the-treehouse' },
    { name: 'Validator', href: '/validator' },
    { name: 'ChimpSwap', href: '/chimpswap' },
    { name: 'FAQ', href: '/faq' },
];

const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/TheChimpions' },
    { name: 'Discord', href: 'https://discord.gg/thechimpions' },
    { name: 'Tensor', href: 'https://www.tensor.trade/trade/the_chimpions' },
    { name: 'Magic Eden', href: 'https://magiceden.io/marketplace/the_chimpions' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.1)] py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Logo */}
            <div className="flex justify-center md:justify-start">
                <Image src="/chimpions-icon-white-on-dark.svg" alt="The Chimpions" width={50} height={50} />
            </div>

            {/* Center: Quick Nav */}
            <nav className="flex justify-center gap-4 flex-wrap">
                {navLinks.map(link => (
                    <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Right: Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
                 {socialLinks.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-[rgba(255,255,255,0.05)]">
            <p className="font-bold">The Chimpions Foundation</p>
            <p className="text-sm">A holder-owned DAO building for art, culture, and builders on Solana.</p>
        </div>
      </div>
    </footer>
  );
} 