import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee] text-[#181411]">
      {/* Top Navigation */}
      <header className="border-b border-dashed border-[#cecece] bg-[#eeeeee]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/square_logo.svg"
                alt="Pagina logo"
                width={32}
                height={32}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#181411]">
              PAGINA
            </span>
            <span className="text-xs px-2 py-0.5 rounded border border-[#cecece] text-[#716860] font-mono">
              v2.0
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c544d]">
            <a href="#features" className="hover:text-[#181411] transition-colors">
              Features
            </a>
            <a href="#workflow" className="hover:text-[#181411] transition-colors">
              Workflow
            </a>
            <a href="#architecture" className="hover:text-[#181411] transition-colors">
              Architecture
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium rounded border border-[#181411] bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] hover:border-[#ff9900] transition-all shadow-sm"
            >
              Open App →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Marketing Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-dashed border-[#cecece] bg-[#e6d9d1]/40 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#716860]">
          <div className="flex items-center gap-3">
            <Image
              src="/images/square_logo.svg"
              alt="Pagina logo"
              width={20}
              height={20}
            />
            <span className="font-semibold text-[#181411]">PAGINA</span>
            <span>— Precision time tracking & immutable invoicing for contractors.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="hover:text-[#181411] underline">
              Dashboard
            </Link>
            <a
              href="https://jotadebeese.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#181411] font-mono underline"
            >
              Crafted by jotadebeese.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
