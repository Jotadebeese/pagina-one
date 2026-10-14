'use client';

import React, { useState } from 'react';

export interface TimeEntryItem {
  id: string;
  date: string;
  hours: number;
  client: string;
  project: string;
  description: string;
  rate: number;
}

export function TimeLogger() {
  const [entries, setEntries] = useState<TimeEntryItem[]>([
    {
      id: '1',
      date: new Date().toISOString().split('T')[0] || '',
      hours: 7.5,
      client: 'Acme Corp',
      project: 'Core Backend API',
      description: 'Refactored auth middleware and optimized database indexes',
      rate: 110,
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0] || '',
      hours: 8.0,
      client: 'Acme Corp',
      project: 'Next.js App',
      description: 'Implemented PDF invoice generation stream',
      rate: 110,
    },
  ]);

  const [date, setDate] = useState(new Date().toISOString().split('T')[0] || '');
  const [hours, setHours] = useState('7.5');
  const [client, setClient] = useState('Acme Corp');
  const [project, setProject] = useState('Full Stack Development');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('110');

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !hours) return;

    const newEntry: TimeEntryItem = {
      id: Date.now().toString(),
      date,
      hours: parseFloat(hours),
      client,
      project,
      description,
      rate: parseFloat(rate),
    };

    setEntries([newEntry, ...entries]);
    setDescription('');
  };

  const totalHours = entries.reduce((acc, curr) => acc + curr.hours, 0);
  const totalAmount = entries.reduce((acc, curr) => acc + curr.hours * curr.rate, 0);

  return (
    <div className="space-y-8">
      {/* Quick Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cycle Total Hours</p>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">{totalHours.toFixed(1)} <span className="text-sm font-normal text-slate-500">hrs</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Billable Amount</p>
          <p className="text-3xl font-extrabold text-blue-600 mt-1">${totalAmount.toLocaleString()} <span className="text-sm font-normal text-slate-500">USD</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Entries</p>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">{entries.length}</p>
        </div>
      </div>

      {/* Time Log Form */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4">⏱️ Log Today's Work</h2>
        <form onSubmit={handleAddEntry} className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Hours</label>
            <input
              type="number"
              step="0.25"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="7.5"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Client</label>
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Rate ($/hr)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Project</label>
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Work Description / PR Details</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What did you build today? e.g. Fixed checkout webhook bug, deployed v1.2"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="sm:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow"
            >
              + Save Log
            </button>
          </div>
        </form>
      </div>

      {/* Entries List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-bold text-slate-900 text-base">Unbilled Time Log Entries</h2>
          <span className="text-xs font-medium text-slate-500">Ready to convert to invoice</span>
        </div>
        <div className="divide-y divide-slate-100">
          {entries.length === 0 ? (
            <p className="p-6 text-center text-sm text-slate-500">No time logged yet. Add your first entry above!</p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">{entry.date}</span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{entry.client}</span>
                    {entry.project && <span className="text-xs text-slate-500">• {entry.project}</span>}
                  </div>
                  <p className="text-sm font-medium text-slate-900">{entry.description}</p>
                </div>
                <div className="flex items-center gap-6 self-end sm:self-auto">
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{entry.hours} hrs @ ${entry.rate}/hr</p>
                    <p className="text-xs font-semibold text-blue-600">${(entry.hours * entry.rate).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => setEntries(entries.filter((e) => e.id !== entry.id))}
                    className="text-slate-400 hover:text-red-500 text-xs font-medium transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
