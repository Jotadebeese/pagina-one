'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface LineItem {
  id: string;
  description: string;
  hours: number;
  rate: number;
}

export default function NewInvoicePage() {
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-005');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(
    new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]
  );
  const [clientCompany, setClientCompany] = useState('Acme Corporation');
  const [clientName, setClientName] = useState('Jane Doe');
  const [clientAddress, setClientAddress] = useState('123 Innovation Way, Tech City');
  const [taxRate, setTaxRate] = useState(10); // 10% default GST

  const [items, setItems] = useState<LineItem[]>([
    { id: '1', description: 'Backend API & Database Architecture (Week 1)', hours: 40, rate: 110 },
    { id: '2', description: 'Next.js Frontend & Invoicing Stream (Week 2)', hours: 38.5, rate: 110 },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: 'Software Development Consulting', hours: 8, rate: 110 },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (id: string, field: 'description' | 'hours' | 'rate', value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.hours * item.rate, 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/invoices" className="text-xs font-semibold text-blue-600 hover:underline mb-1 inline-block">
            ← Back to Invoices
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Create Invoice</h1>
        </div>
        <button
          onClick={() => alert(`Invoice ${invoiceNumber} generated! Ready to download or email.`)}
          className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
        >
          🚀 Generate & Download PDF
        </button>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        {/* Invoice Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Issue Date</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Client Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Client Company</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Contact Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Billing Address</label>
            <input
              type="text"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Line Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900 text-base">Line Items (Fortnightly Breakdown)</h2>
            <button
              type="button"
              onClick={handleAddItem}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
            >
              + Add Item
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-3 items-center bg-slate-50 p-3 rounded-xl">
                <div className="col-span-6">
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Description</label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm bg-white focus:outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Hours</label>
                  <input
                    type="number"
                    step="0.25"
                    value={item.hours}
                    onChange={(e) => handleItemChange(item.id, 'hours', parseFloat(e.target.value) || 0)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm bg-white focus:outline-none text-right"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Rate ($/hr)</label>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm bg-white focus:outline-none text-right"
                  />
                </div>
                <div className="col-span-1 text-right">
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Total</label>
                  <p className="text-sm font-bold text-slate-800">${(item.hours * item.rate).toFixed(2)}</p>
                </div>
                <div className="col-span-1 text-center pt-3">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-slate-400 hover:text-red-500 text-xs font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Totals */}
        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <div className="w-full sm:w-72 space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Subtotal:</span>
              <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-600">
              <span className="flex items-center gap-1">
                Tax (%):
                <input
                  type="number"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="w-12 border border-slate-300 rounded px-1 text-xs text-right"
                />
              </span>
              <span className="font-semibold text-slate-900">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
              <span>Total Due:</span>
              <span className="text-blue-600">${total.toFixed(2)} USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
