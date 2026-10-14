'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Clock, FileText, Users, Plus, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Time Logs', href: '/time', icon: Clock },
  { label: 'Invoices', href: '/invoices', icon: FileText },
  { label: 'Clients', href: '/clients', icon: Users },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee] text-[#181411]">
      {/* Top Application Header */}
      <header className="border-b border-[#cecece] bg-[#ffffff] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/square_logo.svg"
                alt="Pagina logo"
                width={26}
                height={26}
                className="transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-lg tracking-tight text-[#181411]">
                PAGINA
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#ff9900]/20 text-[#181411] font-semibold border border-[#ff9900]/40">
                APP
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-colors',
                      isActive
                        ? 'bg-[#181411] text-[#eeeeee]'
                        : 'text-[#5c544d] hover:text-[#181411] hover:bg-[#eeeeee]'
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/time"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-[#ff9900]" />
              <span className="hidden sm:inline">Log Hours</span>
            </Link>
            <Link
              href="/invoices/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Invoice</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* App Footer */}
      <footer className="border-t border-dashed border-[#cecece] py-6 text-center text-xs text-[#716860] bg-[#e6d9d1]/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pagina — Precision Contractor Invoicing</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#181411] underline">
              Home
            </Link>
            <a href="https://jotadebeese.com" target="_blank" rel="noreferrer" className="hover:text-[#181411] underline">
              jotadebeese.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
