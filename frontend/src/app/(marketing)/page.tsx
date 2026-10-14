import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, FileCheck, ShieldCheck, Zap, Terminal, Database } from 'lucide-react';

export default function MarketingPage() {
  return (
    <div className="space-y-24 py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-16 pb-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dashed border-[#cecece] bg-[#ffffff] text-xs font-mono text-[#5c544d]">
          <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
          CONTRACTOR TIME-TO-INVOICE ENGINE
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#181411] max-w-4xl mx-auto leading-[1.08]">
          Stop wrestling spreadsheets.{' '}
          <span className="font-bold underline decoration-[#ff9900] decoration-4 underline-offset-8">
            Log billable hours
          </span>{' '}
          in seconds.
        </h1>

        <p className="text-lg sm:text-xl text-[#5c544d] max-w-2xl mx-auto leading-relaxed">
          Pagina tracks daily engineering work across clients, aggregates 14-day pay cycles automatically, and compiles pixel-perfect, immutable PDF invoices with zero manual arithmetic.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-sm font-semibold bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-sm"
          >
            Launch App
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/time"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-sm font-semibold border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-all shadow-sm"
          >
            <Clock className="w-4 h-4 text-[#ff9900]" />
            Try Fast Logger
          </Link>
        </div>

        {/* Live Mock Invoice Preview Card */}
        <div className="pt-8 max-w-3xl mx-auto text-left">
          <div className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between border-b border-dashed border-[#cecece] pb-4 gap-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#716860] tracking-wider">Active Fortnight</span>
                <p className="font-bold text-lg text-[#181411]">Oct 01 – Oct 14, 2026</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-[#ff9900]/15 text-[#181411] border border-[#ff9900]/40 font-semibold">
                  72.5 / 80.0 HRS
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-[#181411] text-[#eeeeee]">
                  READY TO INVOICE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#5c544d]">
              <div className="p-3 bg-[#eeeeee]/60 rounded border border-[#cecece]">
                <span className="text-[#716860] block">Client</span>
                <span className="font-bold text-[#181411] text-sm">Acme Software Pty Ltd</span>
              </div>
              <div className="p-3 bg-[#eeeeee]/60 rounded border border-[#cecece]">
                <span className="text-[#716860] block">Contract Rate</span>
                <span className="font-bold text-[#181411] text-sm">$110.00 / hr (USD)</span>
              </div>
              <div className="p-3 bg-[#eeeeee]/60 rounded border border-[#cecece]">
                <span className="text-[#716860] block">Fortnight Total</span>
                <span className="font-bold text-[#ff9900] text-sm">$7,975.00</span>
              </div>
            </div>

            <div className="text-xs text-[#716860] border-t border-dashed border-[#cecece] pt-3 flex items-center justify-between">
              <span>Includes 10% GST breakdown & SWIFT wire instructions</span>
              <span className="font-mono text-[#181411]">Immutable PDF #INV-2026-004</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-[#716860]">Engineered For Precision</p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#181411]">
            Everything you need. <span className="font-bold">Zero enterprise bloat.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#ffffff] border border-[#cecece] rounded-lg space-y-3">
            <div className="w-10 h-10 rounded border border-[#cecece] flex items-center justify-center bg-[#eeeeee]">
              <Zap className="w-5 h-5 text-[#ff9900]" />
            </div>
            <h3 className="font-bold text-[#181411] text-lg">5-Second Time Logging</h3>
            <p className="text-sm text-[#5c544d] leading-relaxed">
              Designed for keyboard navigation. Log daily engineering hours with project notes and commit links without wading through heavy menus.
            </p>
          </div>

          <div className="p-6 bg-[#ffffff] border border-[#cecece] rounded-lg space-y-3">
            <div className="w-10 h-10 rounded border border-[#cecece] flex items-center justify-center bg-[#eeeeee]">
              <Clock className="w-5 h-5 text-[#ff9900]" />
            </div>
            <h3 className="font-bold text-[#181411] text-lg">Fortnightly Aggregator</h3>
            <p className="text-sm text-[#5c544d] leading-relaxed">
              Software contractors bill on 14-day or monthly cycles. Pagina automatically collects unbilled hours into clean, auditable billing batches.
            </p>
          </div>

          <div className="p-6 bg-[#ffffff] border border-[#cecece] rounded-lg space-y-3">
            <div className="w-10 h-10 rounded border border-[#cecece] flex items-center justify-center bg-[#eeeeee]">
              <FileCheck className="w-5 h-5 text-[#ff9900]" />
            </div>
            <h3 className="font-bold text-[#181411] text-lg">Immutable PDF Invoices</h3>
            <p className="text-sm text-[#5c544d] leading-relaxed">
              Compile clean, print-ready PDF invoices with custom tax rates, ABN/VAT IDs, and international wire instructions in a single click.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="p-8 sm:p-12 bg-[#ffffff] border border-[#cecece] rounded-lg space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#716860]">
            <Terminal className="w-4 h-4 text-[#ff9900]" />
            Tech Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-[#181411]">
            Why we dropped the CMS and built with <span className="font-bold">Go + Next.js</span>
          </h2>
          <p className="text-sm text-[#5c544d] leading-relaxed">
            Financial ledgers and billing records demand strict ACID guarantees and sub-15ms response times. We replaced bloated headless CMS layers with a compiled Go backend and lean Next.js frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-4 border border-dashed border-[#cecece] rounded bg-[#eeeeee]/40 space-y-2">
            <span className="font-mono text-xs text-[#716860] block">01 / Storage Tier</span>
            <p className="font-bold text-sm text-[#181411]">PostgreSQL & sqlc</p>
            <p className="text-xs text-[#5c544d]">Strict relational constraints prevent duplicate billing or ledger mutation once sent.</p>
          </div>

          <div className="p-4 border border-dashed border-[#cecece] rounded bg-[#eeeeee]/40 space-y-2">
            <span className="font-mono text-xs text-[#716860] block">02 / Backend Tier</span>
            <p className="font-bold text-sm text-[#181411]">Compiled Go Binary</p>
            <p className="text-xs text-[#5c544d]">Native goroutines for async PDF compilation and transactional email delivery under 20MB RAM.</p>
          </div>

          <div className="p-4 border border-dashed border-[#cecece] rounded bg-[#eeeeee]/40 space-y-2">
            <span className="font-mono text-xs text-[#716860] block">03 / Frontend Tier</span>
            <p className="font-bold text-sm text-[#181411]">Next.js 15 App Router</p>
            <p className="text-xs text-[#5c544d]">Instant UI rendering using React 19 and Tailwind v4 without heavy client bundle bloat.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="text-center py-12 border-t border-dashed border-[#cecece] space-y-6">
        <h2 className="text-3xl sm:text-4xl font-light text-[#181411]">
          Ready to simplify your <span className="font-bold">contractor billing?</span>
        </h2>
        <p className="text-sm text-[#5c544d] max-w-md mx-auto">
          Start logging hours now and generate your first invoice in under two minutes.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-md"
        >
          Open Pagina Dashboard
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
