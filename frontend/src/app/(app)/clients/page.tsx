'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Plus, Mail, Building, MapPin, DollarSign, Clock } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import type { Client } from '@/lib/types';

const INITIAL_CLIENTS: Client[] = [
  {
    id: 'c-1',
    companyName: 'Acme Software Pty Ltd',
    contactName: 'Sarah Jenkins',
    email: 'billing@acme.dev',
    address: 'Level 4, 120 Collins Street, Melbourne VIC 3000, Australia',
    defaultHourlyRate: 110,
    currency: 'USD',
    createdAt: '2026-08-01T00:00:00Z',
  },
  {
    id: 'c-2',
    companyName: 'HyperScale Labs Inc',
    contactName: 'David Chen',
    email: 'accounts@hyperscale.io',
    address: '500 Howard St, San Francisco, CA 94105, USA',
    defaultHourlyRate: 125,
    currency: 'USD',
    createdAt: '2026-09-10T00:00:00Z',
  },
];

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);
  const [showAddForm, setShowAddForm] = useState(false);

  // New Client Form State
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [defaultHourlyRate, setDefaultHourlyRate] = useState('110');
  const [currency, setCurrency] = useState<'USD' | 'AUD' | 'EUR' | 'GBP'>('USD');

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !email.trim()) return;

    const newClient: Client = {
      id: `c-${Date.now()}`,
      companyName: companyName.trim(),
      contactName: contactName.trim(),
      email: email.trim(),
      address: address.trim() || undefined,
      defaultHourlyRate: parseFloat(defaultHourlyRate) || 100,
      currency,
      createdAt: new Date().toISOString(),
    };

    setClients([...clients, newClient]);
    setCompanyName('');
    setContactName('');
    setEmail('');
    setAddress('');
    setShowAddForm(false);
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-[#cecece] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#716860] mb-1">
            <Users className="w-3.5 h-3.5 text-[#ff9900]" />
            CLIENT DIRECTORY
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-[#181411]">
            Managed <span className="font-bold">Clients</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5c544d] mt-1">
            Store client billing addresses, contact emails, and default hourly contract rates.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          {showAddForm ? 'Close Form' : '+ Add New Client'}
        </button>
      </div>

      {/* Add Client Form (Collapsible) */}
      {showAddForm && (
        <div className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 shadow-xs space-y-4">
          <h2 className="font-bold text-sm text-[#181411] flex items-center gap-2">
            <Plus className="w-4 h-4 text-[#ff9900]" />
            Add New Client
          </h2>

          <form onSubmit={handleAddClient} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">COMPANY NAME</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Software Pty Ltd"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">CONTACT NAME</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">BILLING EMAIL</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. accounts@acme.dev"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">DEFAULT HOURLY RATE</label>
                <input
                  type="number"
                  value={defaultHourlyRate}
                  onChange={(e) => setDefaultHourlyRate(e.target.value)}
                  placeholder="110"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">CURRENCY</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none font-mono"
                >
                  <option value="USD">USD ($)</option>
                  <option value="AUD">AUD (A$)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#716860] mb-1">BILLING ADDRESS</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, Postcode"
                  className="w-full px-3 py-2 rounded border border-[#cecece] bg-[#eeeeee]/30 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-xs font-semibold rounded border border-[#cecece] text-[#716860]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold rounded bg-[#ff9900] text-[#181411] hover:bg-[#e08800] transition-colors"
              >
                Save Client
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Clients Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-[#eeeeee] pb-3">
              <div>
                <h3 className="font-bold text-base text-[#181411]">{client.companyName}</h3>
                <span className="text-xs text-[#716860]">{client.contactName}</span>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-[#eeeeee] text-[#181411] border border-[#cecece]">
                ${client.defaultHourlyRate}/h {client.currency}
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#5c544d]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff9900]" />
                <span className="font-mono">{client.email}</span>
              </div>
              {client.address && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#716860]" />
                  <span>{client.address}</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-dashed border-[#cecece] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#716860]">
                Added: {formatDate(client.createdAt)}
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="/time"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded border border-[#cecece] bg-[#ffffff] text-[#181411] hover:border-[#181411] transition-colors"
                >
                  <Clock className="w-3 h-3 text-[#ff9900]" />
                  Log Time
                </Link>
                <Link
                  href="/invoices/new"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-colors"
                >
                  Invoice Client
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
