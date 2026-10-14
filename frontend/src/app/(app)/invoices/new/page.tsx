'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Trash2, Download, Check, Sparkles, Building2 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { InvoiceItem } from '@/lib/types';

export default function NewInvoicePage() {
  const router = useRouter();

  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-004');
  const [clientName, setClientName] = useState('Acme Software Pty Ltd');
  const [clientEmail, setClientEmail] = useState('billing@acme.dev');
  const [clientAddress, setClientAddress] = useState('Level 4, 120 Collins Street, Melbourne VIC 3000, Australia');
  const [currency, setCurrency] = useState<'USD' | 'AUD' | 'EUR' | 'GBP'>('USD');
  const [issueDate, setIssueDate] = useState('2026-10-14');
  const [dueDate, setDueDate] = useState('2026-10-28');
  const [periodStart, setPeriodStart] = useState('2026-10-01');
  const [periodEnd, setPeriodEnd] = useState('2026-10-14');
  const [taxRate, setTaxRate] = useState(10); // 10% default GST/VAT
  const [notes, setNotes] = useState('Payment due within 14 days of invoice date. Thank you for your business.');

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: 'item-1',
      description: 'Backend Go API Architecture & Database Connection Pooling (Week 1)',
      hours: 38.0,
      rate: 110,
      amount: 4180,
    },
    {
      id: 'item-2',
      description: 'Next.js 15 Frontend Refactor & Invoicing Route Groups (Week 2)',
      hours: 34.5,
      rate: 110,
      amount: 3795,
    },
  ]);

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: `item-${Date.now()}`,
      description: 'Senior Software Engineering Consulting',
      hours: 8,
      rate: 110,
      amount: 880,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (
    id: string,
    field: 'description' | 'hours' | 'rate',
    val: string | number
  ) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: val };
          if (field === 'hours' || field === 'rate') {
            const h = field === 'hours' ? Number(val) : item.hours;
            const r = field === 'rate' ? Number(val) : item.rate;
            updated.amount = (h || 0) * (r || 0);
          }
          return updated;
        }
        return item;
      })
    );
  };

  const handleImportUnbilled = () => {
    setItems([
      {
        id: 'imp-1',
        description: 'Implemented Go backend router and postgres connection pool (Oct 14)',
        hours: 7.5,
        rate: 110,
        amount: 825,
      },
      {
        id: 'imp-2',
        description: 'Refactored Next.js frontend into marketing and app route groups (Oct 13)',
        hours: 8.0,
        rate: 110,
        amount: 880,
      },
      {
        id: 'imp-3',
        description: 'Database indexing and query execution plan optimization (Oct 12)',
        hours: 7.0,
        rate: 110,
        amount: 770,
      },
      {
        id: 'imp-4',
        description: 'Implemented token bucket rate limiter unit tests (Oct 11)',
        hours: 8.0,
        rate: 110,
        amount: 880,
      },
      {
        id: 'imp-5',
        description: 'API gateway reverse proxy streaming and backpressure handling (Oct 10)',
        hours: 7.5,
        rate: 110,
        amount: 825,
      },
    ]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const totalHours = items.reduce((sum, item) => sum + Number(item.hours || 0), 0);
  const taxAmount = (subtotal * (taxRate || 0)) / 100;
  const totalAmount = subtotal + taxAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Invoice ${invoiceNumber} generated successfully! Ready to export as immutable PDF.`);
    router.push('/invoices');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-dashed border-[#cecece] pb-4">
        <Link
          href="/invoices"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5c544d] hover:text-[#181411] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Invoices
        </Link>
        <span className="text-xs font-mono text-[#716860]">
          FORTNIGHTLY INVOICE GENERATOR
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Invoice Metadata Box */}
        <div className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#eeeeee] pb-4">
            <div>
              <span className="text-[11px] font-mono text-[#716860] uppercase block">INVOICE NUMBER</span>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="font-mono font-bold text-xl text-[#181411] bg-transparent border-b border-[#cecece] focus:border-[#181411] outline-none"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleImportUnbilled}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#ff9900]/20 text-[#181411] border border-[#ff9900]/40 hover:bg-[#ff9900] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ff9900]" />
                Auto-Pull Unbilled Time Logs
              </button>
            </div>
          </div>

          {/* Dates & Client Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">ISSUE DATE</label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[#cecece] font-mono bg-[#eeeeee]/30 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">DUE DATE (NET 14)</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[#cecece] font-mono bg-[#eeeeee]/30 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">PERIOD START</label>
              <input
                type="date"
                value={periodStart}
                onChange={(e) => setPeriodStart(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[#cecece] font-mono bg-[#eeeeee]/30 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">PERIOD END</label>
              <input
                type="date"
                value={periodEnd}
                onChange={(e) => setPeriodEnd(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[#cecece] font-mono bg-[#eeeeee]/30 outline-none"
              />
            </div>
          </div>

          {/* Client Details Section */}
          <div className="p-4 bg-[#eeeeee]/40 rounded border border-[#cecece] space-y-3">
            <span className="text-[11px] font-mono uppercase text-[#716860] block">BILL TO CLIENT</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Client Company Name"
                  className="w-full px-3 py-2 font-semibold rounded border border-[#cecece] bg-[#ffffff] outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="Billing Email"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#ffffff] font-mono outline-none"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="Billing Address (City, Country, Postal Code)"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#ffffff] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Itemized Line Items */}
        <div className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#eeeeee] pb-3">
            <h2 className="font-bold text-sm text-[#181411]">
              Line Items ({items.length}) • <span className="font-mono text-xs text-[#716860]">{totalHours.toFixed(1)} Total Hours</span>
            </h2>
            <button
              type="button"
              onClick={handleAddItem}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-colors"
            >
              <Plus className="w-3 h-3 text-[#ff9900]" />
              Add Line
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 bg-[#eeeeee]/30 rounded border border-[#cecece]/70 text-xs">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                    placeholder="Work description"
                    className="w-full px-2.5 py-1.5 rounded border border-[#cecece] bg-[#ffffff] outline-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="w-20">
                    <input
                      type="number"
                      step="0.25"
                      value={item.hours}
                      onChange={(e) => handleItemChange(item.id, 'hours', parseFloat(e.target.value) || 0)}
                      placeholder="Hours"
                      className="w-full px-2 py-1.5 text-right font-mono rounded border border-[#cecece] bg-[#ffffff] outline-none"
                      required
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      step="1"
                      value={item.rate}
                      onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                      placeholder="Rate"
                      className="w-full px-2 py-1.5 text-right font-mono rounded border border-[#cecece] bg-[#ffffff] outline-none"
                      required
                    />
                  </div>
                  <div className="w-28 text-right font-mono font-bold text-sm text-[#181411]">
                    {formatCurrency(item.amount, currency)}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1.5 text-[#716860] hover:text-[#dc2626] transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Totals Summary */}
          <div className="border-t border-dashed border-[#cecece] pt-4 flex flex-col sm:flex-row justify-between gap-6 text-xs">
            <div className="space-y-3 sm:max-w-xs">
              <label className="block text-[11px] font-mono text-[#716860]">PAYMENT & BANK NOTES</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none text-xs"
              />
            </div>

            <div className="sm:w-64 space-y-2 text-right">
              <div className="flex justify-between font-mono">
                <span className="text-[#716860]">Subtotal:</span>
                <span className="font-bold text-[#181411]">{formatCurrency(subtotal, currency)}</span>
              </div>
              <div className="flex justify-between items-center font-mono">
                <span className="text-[#716860] flex items-center gap-1">
                  Tax Rate (%)
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                    className="w-12 px-1 py-0.5 text-right rounded border border-[#cecece] bg-[#ffffff]"
                  />
                </span>
                <span className="font-bold text-[#181411]">{formatCurrency(taxAmount, currency)}</span>
              </div>
              <div className="flex justify-between font-mono text-base border-t border-[#cecece] pt-2">
                <span className="font-bold text-[#181411]">Total Due:</span>
                <span className="font-extrabold text-[#ff9900]">{formatCurrency(totalAmount, currency)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank & Payout Instructions Preview */}
        <div className="p-5 bg-[#ffffff] border border-[#cecece] rounded-lg text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-[#181411]">
            <Building2 className="w-4 h-4 text-[#ff9900]" />
            Remittance Wire Instructions (Embedded in PDF)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px] text-[#5c544d] pt-1">
            <div>
              <span className="text-[#716860] block">Beneficiary:</span>
              <span className="text-[#181411] font-semibold">Juan Diego Bedoya</span>
            </div>
            <div>
              <span className="text-[#716860] block">Bank Name / SWIFT:</span>
              <span className="text-[#181411] font-semibold">Wise / CommBank (CBAUAU2S)</span>
            </div>
            <div>
              <span className="text-[#716860] block">Routing / BSB:</span>
              <span className="text-[#181411] font-semibold">063-000 • Acc: 12345678</span>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            href="/invoices"
            className="px-4 py-2 text-xs font-semibold rounded border border-[#cecece] bg-[#ffffff] text-[#5c544d] hover:border-[#181411] transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2.5 text-xs font-semibold rounded bg-[#ff9900] text-[#181411] hover:bg-[#e08800] transition-colors shadow-xs"
          >
            Generate & Lock Invoice →
          </button>
        </div>
      </form>
    </div>
  );
}
