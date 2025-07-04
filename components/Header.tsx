import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 bg-clip-padding shadow-none flex justify-between items-center" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="flex items-center">
        <span className="text-4xl font-black text-black" style={{ fontFamily: 'inherit' }}>Recal!<span className="text-blue-600">pro</span></span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        <a href="#features" className="text-gray-600 hover:text-blue-600 text-lg">Features</a>
        <a href="#test-series" className="text-gray-600 hover:text-blue-600 text-lg">Test Series</a>
        <a href="#syllabus" className="text-gray-600 hover:text-blue-600 text-lg">Syllabus</a>
        <a href="#marks-vs-rank" className="text-gray-600 hover:text-blue-600 text-lg">Cutoff's</a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-600 text-lg">Pricing</a>
        <Link href="/recall" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-lg">Recall</Link>
        <Link href="/auth/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-lg">Get Started</Link>
      </nav>
      {/* Mobile Nav Button */}
      <div className="md:hidden flex items-center">
        <button className="p-2" onClick={() => setMobileNavOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div className="w-4/5 max-w-xs bg-white/80 backdrop-blur-md h-full shadow-lg flex flex-col p-6">
            <button className="self-end mb-6" onClick={() => setMobileNavOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#features" className="mb-4 text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileNavOpen(false)}>Features</a>
            <a href="#test-series" className="mb-4 text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileNavOpen(false)}>Test Series</a>
            <a href="#syllabus" className="mb-4 text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileNavOpen(false)}>Syllabus</a>
            <a href="#marks-vs-rank" className="mb-4 text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileNavOpen(false)}>Cutoff's</a>
            <a href="#pricing" className="mb-4 text-gray-700 hover:text-blue-600 text-lg" onClick={() => setMobileNavOpen(false)}>Pricing</a>
            <Link href="/recall" className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-lg" onClick={() => setMobileNavOpen(false)}>Recall</Link>
            <Link href="/auth/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-lg" onClick={() => setMobileNavOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
} 