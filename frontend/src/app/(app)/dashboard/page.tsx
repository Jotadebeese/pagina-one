'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Plus, ArrowUpRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
  const fortnightHours = 72.5;
  const targetHours = 80.0;
  const percentFortnight = Math.min(100, Math.round((fortnightHours / targetHours) * 100));

  return (
    <div className="space-y-8">
      {/* Top Welcome / Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-[#cecece] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#716860] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
            ACTIVE BILLING PERIOD
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-[#181411]">
            Contractor <span className="font-bold">Dashboard</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5c544d] mt-1">
            Current cycle: <span className="font-mono font-medium text-[#181411]">Oct 01 – Oct 14, 2026</span> (Day 14 of 14)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/time"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-all shadow-xs"
          >
            <Clock className="w-3.5 h-3.5 text-[#ff9900]" />
            Log Hours
          </Link>
          <Link
            href="/invoices/new"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            Generate Invoice
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Hours This Fortnight */}
        <div className="bg-[#ffffff] p-5 rounded-lg border border-[#cecece] shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#716860]">
            <span>HOURS (FORTNIGHT)</span>
            <span className="font-semibold text-[#181411]">{percentFortnight}%</span>
          </div>
          <p className="text-3xl font-extrabold text-[#181411]">
            {fortnightHours} <span className="text-sm font-normal text-[#716860]">/ {targetHours} hrs</span>
          </p>
          <div className="w-full bg-[#eeeeee] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#ff9900] h-full rounded-full transition-all duration-500"
              style={{ width: `${percentFortnight}%` }}
            />
          </div>
        </div>

        {/* Unbilled Amount */}
        <div className="bg-[#ffffff] p-5 rounded-lg border border-[#cecece] shadow-xs space-y-2">
          <div className="text-xs font-mono text-[#716860]">UNBILLED AMOUNT</div>
          <p className="text-3xl font-extrabold text-[#181411]">
            {formatCurrency(7975)}
          </p>
          <p className="text-xs text-[#5c544d] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
            Ready to compile into invoice
          </p>
        </div>

        {/* Outstanding Invoices */}
        <div className="bg-[#ffffff] p-5 rounded-lg border border-[#cecece] shadow-xs space-y-2">
          <div className="text-xs font-mono text-[#716860]">OUTSTANDING</div>
          <p className="text-3xl font-extrabold text-[#181411]">
            {formatCurrency(8800)}
          </p>
          <p className="text-xs text-[#b45309] flex items-center gap-1 font-mono">
            <AlertCircle className="w-3 h-3" />
            INV-2026-003 due in 4 days
          </p>
        </div>

        {/* Total Billed YTD */}
        <div className="bg-[#ffffff] p-5 rounded-lg border border-[#cecece] shadow-xs space-y-2">
          <div className="text-xs font-mono text-[#716860]">BILLED YTD</div>
          <p className="text-3xl font-extrabold text-[#181411]">
            {formatCurrency(48200)}
          </p>
          <p className="text-xs text-[#15803d] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            100% collection rate
          </p>
        </div>
      </div>

      {/* Fortnight Action Banner */}
      <div className="p-5 bg-[#ffffff] border border-[#cecece] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase rounded bg-[#ff9900]/20 text-[#181411] font-semibold border border-[#ff9900]/40">
            CYCLE COMPLETE
          </span>
          <h2 className="font-bold text-base text-[#181411]">
            Fortnightly Pay Period (Oct 01 – Oct 14) is ready for billing
          </h2>
          <p className="text-xs text-[#5c544d]">
            72.5 unbilled hours recorded for Acme Software Pty Ltd ($7,975.00 + GST).
          </p>
        </div>
        <Link
          href="/invoices/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#ff9900] text-[#181411] font-semibold text-xs hover:bg-[#e08800] transition-colors shrink-0 shadow-xs"
        >
          Generate Invoice #INV-2026-004 →
        </Link>
      </div>

      {/* Two Column Grid: Recent Unbilled Logs + Recent Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Time Logs */}
        <div className="bg-[#ffffff] rounded-lg border border-[#cecece] overflow-hidden shadow-xs">
          <div className="p-4 border-b border-[#cecece] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff9900]" />
              <h3 className="font-bold text-sm text-[#181411]">Recent Unbilled Logs</h3>
            </div>
            <Link href="/time" className="text-xs font-mono text-[#5c544d] hover:text-[#181411] underline">
              View All Logs →
            </Link>
          </div>

          <div className="divide-y divide-[#eeeeee] text-xs">
            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#181411]">Acme Software</span>
                  <span className="text-[#716860]">•</span>
                  <span className="text-[#716860] font-mono">Oct 14, 2026</span>
                </div>
                <p className="text-[#5c544d]">Implemented Go backend router and postgres pool migration</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">7.5 hrs</span>
                <span className="text-[#716860] block font-mono">$825.00</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#181411]">Acme Software</span>
                  <span className="text-[#716860]">•</span>
                  <span className="text-[#716860] font-mono">Oct 13, 2026</span>
                </div>
                <p className="text-[#5c544d]">Refactored Next.js frontend into marketing and app route groups</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">8.0 hrs</span>
                <span className="text-[#716860] block font-mono">$880.00</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#181411]">Acme Software</span>
                  <span className="text-[#716860]">•</span>
                  <span className="text-[#716860] font-mono">Oct 12, 2026</span>
                </div>
                <p className="text-[#5c544d]">Database indexing and query execution plan optimization</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">7.0 hrs</span>
                <span className="text-[#716860] block font-mono">$770.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-[#ffffff] rounded-lg border border-[#cecece] overflow-hidden shadow-xs">
          <div className="p-4 border-b border-[#cecece] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff9900]" />
              <h3 className="font-bold text-sm text-[#181411]">Recent Invoices</h3>
            </div>
            <Link href="/invoices" className="text-xs font-mono text-[#5c544d] hover:text-[#181411] underline">
              All Invoices →
            </Link>
          </div>

          <div className="divide-y divide-[#eeeeee] text-xs">
            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#181411]">INV-2026-003</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#fef3c7] text-[#b45309] border border-[#fde68a]">
                    SENT
                  </span>
                </div>
                <p className="text-[#5c544d]">Acme Software Pty Ltd • Due Oct 18, 2026</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">{formatCurrency(8800)}</span>
                <span className="text-[#716860] block">80.0 hrs</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#181411]">INV-2026-002</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0]">
                    PAID
                  </span>
                </div>
                <p className="text-[#5c544d]">Acme Software Pty Ltd • Paid Sep 30, 2026</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">{formatCurrency(8800)}</span>
                <span className="text-[#716860] block">80.0 hrs</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4 hover:bg-[#eeeeee]/40 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#181411]">INV-2026-001</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0]">
                    PAID
                  </span>
                </div>
                <p className="text-[#5c544d]">Acme Software Pty Ltd • Paid Sep 15, 2026</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-bold font-mono text-sm text-[#181411]">{formatCurrency(8250)}</span>
                <span className="text-[#716860] block">75.0 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
