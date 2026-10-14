'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Download, Eye, CheckCircle2, Clock, FileText, ArrowUpRight } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import type { Invoice, InvoiceStatus } from '@/lib/types';

const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'inv-4',
    invoiceNumber: 'INV-2026-004',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    clientEmail: 'billing@acme.dev',
    status: 'draft',
    issueDate: '2026-10-14',
    dueDate: '2026-10-28',
    periodStart: '2026-10-01',
    periodEnd: '2026-10-14',
    currency: 'USD',
    subtotal: 7975,
    taxRate: 10,
    taxAmount: 797.5,
    totalAmount: 8772.5,
    notes: 'Payment due within 14 days. Wire instructions attached.',
    createdAt: '2026-10-14T12:00:00Z',
    items: [],
  },
  {
    id: 'inv-3',
    invoiceNumber: 'INV-2026-003',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    clientEmail: 'billing@acme.dev',
    status: 'sent',
    issueDate: '2026-10-01',
    dueDate: '2026-10-15',
    periodStart: '2026-09-15',
    periodEnd: '2026-09-30',
    currency: 'USD',
    subtotal: 8000,
    taxRate: 10,
    taxAmount: 800,
    totalAmount: 8800,
    notes: 'Fortnightly billing cycle #3.',
    createdAt: '2026-10-01T12:00:00Z',
    items: [],
  },
  {
    id: 'inv-2',
    invoiceNumber: 'INV-2026-002',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    clientEmail: 'billing@acme.dev',
    status: 'paid',
    issueDate: '2026-09-15',
    dueDate: '2026-09-29',
    periodStart: '2026-09-01',
    periodEnd: '2026-09-14',
    currency: 'USD',
    subtotal: 8000,
    taxRate: 10,
    taxAmount: 800,
    totalAmount: 8800,
    notes: 'Paid in full via international SWIFT transfer.',
    createdAt: '2026-09-15T12:00:00Z',
    items: [],
  },
  {
    id: 'inv-1',
    invoiceNumber: 'INV-2026-001',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    clientEmail: 'billing@acme.dev',
    status: 'paid',
    issueDate: '2026-09-01',
    dueDate: '2026-09-15',
    periodStart: '2026-08-15',
    periodEnd: '2026-08-31',
    currency: 'USD',
    subtotal: 7500,
    taxRate: 10,
    taxAmount: 750,
    totalAmount: 8250,
    notes: 'Paid in full.',
    createdAt: '2026-09-01T12:00:00Z',
    items: [],
  },
];

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);
  const [filter, setFilter] = useState<'all' | InvoiceStatus>('all');

  const filteredInvoices =
    filter === 'all'
      ? invoices
      : invoices.filter((inv) => inv.status === filter);

  const markAsPaid = (id: string) => {
    setInvoices(
      invoices.map((inv) => (inv.id === id ? { ...inv, status: 'paid' } : inv))
    );
  };

  const totalPaid = invoices
    .filter((inv) => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.totalAmount, 0);

  const totalOutstanding = invoices
    .filter((inv) => inv.status === 'sent')
    .reduce((sum, inv) => sum + inv.totalAmount, 0);

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-[#cecece] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#716860] mb-1">
            <FileText className="w-3.5 h-3.5 text-[#ff9900]" />
            FINANCIAL LEDGER
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-[#181411]">
            Client <span className="font-bold">Invoices</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5c544d] mt-1">
            Auditable, immutable PDF billing records compiled directly from your time logs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/invoices/new"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            + New Invoice
          </Link>
        </div>
      </div>

      {/* Ledger Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#ffffff] p-4 rounded-lg border border-[#cecece] shadow-xs">
          <span className="text-[11px] font-mono text-[#716860] block">OUTSTANDING (PENDING)</span>
          <span className="text-2xl font-bold font-mono text-[#b45309]">
            {formatCurrency(totalOutstanding)}
          </span>
        </div>
        <div className="bg-[#ffffff] p-4 rounded-lg border border-[#cecece] shadow-xs">
          <span className="text-[11px] font-mono text-[#716860] block">COLLECTED YTD</span>
          <span className="text-2xl font-bold font-mono text-[#15803d]">
            {formatCurrency(totalPaid)}
          </span>
        </div>
        <div className="bg-[#ffffff] p-4 rounded-lg border border-[#cecece] shadow-xs">
          <span className="text-[11px] font-mono text-[#716860] block">TOTAL INVOICES ISSUED</span>
          <span className="text-2xl font-bold font-mono text-[#181411]">
            {invoices.length} records
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#cecece] pb-2 text-xs font-mono">
        {(['all', 'draft', 'sent', 'paid', 'void'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1.5 rounded uppercase font-semibold transition-colors ${
              filter === status
                ? 'bg-[#181411] text-[#eeeeee]'
                : 'text-[#716860] hover:text-[#181411] hover:bg-[#eeeeee]'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-[#ffffff] rounded-lg border border-[#cecece] overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#eeeeee]/60 border-b border-[#cecece] font-mono text-[11px] text-[#716860]">
              <tr>
                <th className="py-2.5 px-4">INVOICE #</th>
                <th className="py-2.5 px-4">CLIENT</th>
                <th className="py-2.5 px-4">BILLING PERIOD</th>
                <th className="py-2.5 px-4">DUE DATE</th>
                <th className="py-2.5 px-4 text-right">TOTAL AMOUNT</th>
                <th className="py-2.5 px-4 text-center">STATUS</th>
                <th className="py-2.5 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee]">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-[#eeeeee]/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-[#181411]">
                    {inv.invoiceNumber}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-[#181411] block">{inv.clientName}</span>
                    <span className="text-[11px] text-[#716860] font-mono">{inv.clientEmail}</span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#5c544d]">
                    {inv.periodStart && inv.periodEnd
                      ? `${formatDate(inv.periodStart)} – ${formatDate(inv.periodEnd)}`
                      : formatDate(inv.issueDate)}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#716860]">
                    {formatDate(inv.dueDate)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-[#181411] text-sm">
                    {formatCurrency(inv.totalAmount, inv.currency)}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {inv.status === 'paid' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0]">
                        PAID
                      </span>
                    )}
                    {inv.status === 'sent' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#fef3c7] text-[#b45309] border border-[#fde68a]">
                        SENT
                      </span>
                    )}
                    {inv.status === 'draft' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#eeeeee] text-[#5c544d] border border-[#cecece]">
                        DRAFT
                      </span>
                    )}
                    {inv.status === 'void' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#fee2e2] text-[#b91c1c] border border-[#fecaca]">
                        VOID
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    {inv.status === 'sent' && (
                      <button
                        onClick={() => markAsPaid(inv.id)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded border border-[#15803d]/30 bg-[#dcfce7]/60 text-[#15803d] hover:bg-[#dcfce7] transition-colors"
                      >
                        Mark Paid
                      </button>
                    )}
                    <button
                      onClick={() => alert(`Downloading PDF for ${inv.invoiceNumber}...`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-colors"
                    >
                      <Download className="w-3 h-3 text-[#ff9900]" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
