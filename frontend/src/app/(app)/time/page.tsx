'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Plus, Trash2, CheckCircle, Tag, DollarSign, Calendar } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import type { TimeEntry } from '@/lib/types';

const INITIAL_ENTRIES: TimeEntry[] = [
  {
    id: 't-1',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    date: '2026-10-14',
    hours: 7.5,
    hourlyRate: 110,
    description: 'Implemented Go backend router and postgres connection pool',
    project: 'Core Engine',
    billable: true,
    invoiced: false,
    createdAt: '2026-10-14T10:00:00Z',
  },
  {
    id: 't-2',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    date: '2026-10-13',
    hours: 8.0,
    hourlyRate: 110,
    description: 'Refactored Next.js frontend into marketing and app route groups',
    project: 'Web Platform',
    billable: true,
    invoiced: false,
    createdAt: '2026-10-13T10:00:00Z',
  },
  {
    id: 't-3',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    date: '2026-10-12',
    hours: 7.0,
    hourlyRate: 110,
    description: 'Database indexing and query execution plan optimization',
    project: 'Core Engine',
    billable: true,
    invoiced: false,
    createdAt: '2026-10-12T10:00:00Z',
  },
  {
    id: 't-4',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    date: '2026-10-11',
    hours: 8.0,
    hourlyRate: 110,
    description: 'Implemented token bucket rate limiter unit tests and benchmark suite',
    project: 'Security',
    billable: true,
    invoiced: false,
    createdAt: '2026-10-11T10:00:00Z',
  },
  {
    id: 't-5',
    clientId: 'c-1',
    clientName: 'Acme Software Pty Ltd',
    date: '2026-10-10',
    hours: 7.5,
    hourlyRate: 110,
    description: 'API gateway reverse proxy streaming and backpressure handling',
    project: 'Gateway',
    billable: true,
    invoiced: false,
    createdAt: '2026-10-10T10:00:00Z',
  },
];

export default function TimeLogsPage() {
  const [entries, setEntries] = useState<TimeEntry[]>(INITIAL_ENTRIES);

  // Form State
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [clientName, setClientName] = useState('Acme Software Pty Ltd');
  const [hours, setHours] = useState('7.5');
  const [rate, setRate] = useState('110');
  const [project, setProject] = useState('Core Engine');
  const [description, setDescription] = useState('');
  const [billable, setBillable] = useState(true);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !hours) return;

    const parsedHours = parseFloat(hours);
    const parsedRate = parseFloat(rate);

    const newEntry: TimeEntry = {
      id: `t-${Date.now()}`,
      clientId: 'c-1',
      clientName,
      date,
      hours: parsedHours,
      hourlyRate: parsedRate,
      description: description.trim(),
      project: project.trim() || undefined,
      billable,
      invoiced: false,
      createdAt: new Date().toISOString(),
    };

    setEntries([newEntry, ...entries]);
    setDescription('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const totalUnbilledHours = entries
    .filter((e) => !e.invoiced)
    .reduce((sum, e) => sum + e.hours, 0);

  const totalUnbilledAmount = entries
    .filter((e) => !e.invoiced && e.billable)
    .reduce((sum, e) => sum + e.hours * e.hourlyRate, 0);

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-[#cecece] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#716860] mb-1">
            <Clock className="w-3.5 h-3.5 text-[#ff9900]" />
            PRECISION TIME TRACKER
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-[#181411]">
            Daily <span className="font-bold">Time Logs</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5c544d] mt-1">
            Log engineering tasks in under 5 seconds. Everything stays staged until compiled into a final invoice.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded bg-[#ffffff] border border-[#cecece] text-right font-mono text-xs">
            <span className="text-[#716860] block">UNBILLED POOL</span>
            <span className="font-bold text-[#181411] text-sm">{totalUnbilledHours.toFixed(1)} hrs</span>{' '}
            <span className="text-[#ff9900] font-semibold">({formatCurrency(totalUnbilledAmount)})</span>
          </div>
          <Link
            href="/invoices/new"
            className="px-3.5 py-2 text-xs font-semibold rounded bg-[#181411] text-[#eeeeee] hover:bg-[#ff9900] hover:text-[#181411] transition-all shadow-xs"
          >
            Invoice These Hours →
          </Link>
        </div>
      </div>

      {/* Fast Time Logger Card */}
      <div className="bg-[#ffffff] border border-[#cecece] rounded-lg p-6 shadow-xs space-y-4">
        <h2 className="font-bold text-sm text-[#181411] flex items-center gap-2">
          <Plus className="w-4 h-4 text-[#ff9900]" />
          Log New Work Session
        </h2>

        <form onSubmit={handleAddEntry} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
            {/* Date */}
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">DATE</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
                required
              />
            </div>

            {/* Client */}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-mono text-[#716860] mb-1">CLIENT</label>
              <select
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
              >
                <option value="Acme Software Pty Ltd">Acme Software Pty Ltd</option>
                <option value="HyperScale Labs">HyperScale Labs</option>
                <option value="NextGen Cloud">NextGen Cloud</option>
              </select>
            </div>

            {/* Hours */}
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">HOURS</label>
              <input
                type="number"
                step="0.25"
                min="0.25"
                max="24"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="7.5"
                className="w-full px-3 py-2 text-xs font-mono rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
                required
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">RATE ($/HR)</label>
              <input
                type="number"
                step="1"
                min="0"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="110"
                className="w-full px-3 py-2 text-xs font-mono rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
                required
              />
            </div>

            {/* Project Tag */}
            <div>
              <label className="block text-[11px] font-mono text-[#716860] mb-1">PROJECT</label>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="e.g. Core Engine"
                className="w-full px-3 py-2 text-xs rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
              />
            </div>
          </div>

          {/* Description & Submit Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What did you build or ship? (e.g. Implemented Postgres connection pool & JWT auth)"
                className="w-full px-3.5 py-2.5 text-xs rounded border border-[#cecece] bg-[#eeeeee]/30 focus:border-[#181411] focus:bg-[#ffffff] outline-none"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-xs text-[#5c544d] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={billable}
                  onChange={(e) => setBillable(e.target.checked)}
                  className="rounded border-[#cecece] text-[#ff9900] focus:ring-[#ff9900]"
                />
                <span>Billable</span>
              </label>

              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold rounded bg-[#ff9900] text-[#181411] hover:bg-[#e08800] transition-colors shrink-0 shadow-xs"
              >
                + Log Entry
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Logged Entries Table */}
      <div className="bg-[#ffffff] rounded-lg border border-[#cecece] overflow-hidden shadow-xs">
        <div className="p-4 border-b border-[#cecece] flex items-center justify-between">
          <h3 className="font-bold text-sm text-[#181411]">
            Recorded Sessions ({entries.length})
          </h3>
          <span className="text-xs font-mono text-[#716860]">
            Sort: Most Recent
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#eeeeee]/60 border-b border-[#cecece] font-mono text-[11px] text-[#716860]">
              <tr>
                <th className="py-2.5 px-4">DATE</th>
                <th className="py-2.5 px-4">CLIENT</th>
                <th className="py-2.5 px-4">PROJECT</th>
                <th className="py-2.5 px-4">DESCRIPTION</th>
                <th className="py-2.5 px-4 text-right">HOURS</th>
                <th className="py-2.5 px-4 text-right">RATE</th>
                <th className="py-2.5 px-4 text-right">AMOUNT</th>
                <th className="py-2.5 px-4 text-center">STATUS</th>
                <th className="py-2.5 px-4 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee]">
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-[#eeeeee]/30 transition-colors">
                  <td className="py-3 px-4 font-mono text-[#716860] whitespace-nowrap">
                    {formatDate(entry.date)}
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#181411] whitespace-nowrap">
                    {entry.clientName}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {entry.project ? (
                      <span className="px-2 py-0.5 rounded bg-[#eeeeee] text-[#5c544d] border border-[#cecece] text-[10px] font-mono">
                        {entry.project}
                      </span>
                    ) : (
                      <span className="text-[#716860]">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-[#181411] max-w-md">
                    {entry.description}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#181411]">
                    {entry.hours.toFixed(1)}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-[#716860]">
                    ${entry.hourlyRate}/h
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-[#181411]">
                    {formatCurrency(entry.hours * entry.hourlyRate)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {entry.invoiced ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#dcfce7] text-[#15803d]">
                        INVOICED
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#ff9900]/20 text-[#181411] border border-[#ff9900]/40">
                        UNBILLED
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="text-[#716860] hover:text-[#dc2626] p-1 rounded transition-colors"
                      title="Delete log"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
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
