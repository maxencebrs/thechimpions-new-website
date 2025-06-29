"use client";
import Link from 'next/link';
import { useUser } from '@/hooks/useUser';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Navbar() {
  const user = useUser();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          The Chimpions
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link href="/validator" className="hover:text-gray-300">Validator</Link>
          <Link href="/treehouse-capital" className="hover:text-gray-300">Treehouse Capital</Link>
          <Link href="/the-treehouse" className="hover:text-gray-300">The Treehouse</Link>
          <Link href="/holders" className="hover:text-gray-300">Holders</Link>
          <Link href="/chimpswap" className="hover:text-gray-300">ChimpSwap</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
          <Link href="/the-chimpions" className="hover:text-gray-300">About</Link>
        </div>
        <div className="ml-4 flex items-center space-x-2">
          {user && user.email ? (
            <span className="text-sm text-gray-300">{user.email}</span>
          ) : (
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold">Sign In</Link>
          )}
          <WalletMultiButton className="ml-2" />
        </div>
      </div>
    </nav>
  );
} 