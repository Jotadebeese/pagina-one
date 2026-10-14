import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Contractor Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Overview of your hours, billings, and recent client invoices.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/time"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            ⏱️ Log Hours
          </Link>
          <Link
            href="/invoices/new"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            + Generate Invoice
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Hours This Fortnight</p>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">68.5 <span className="text-sm font-normal text-slate-500">/ 80.0</span></p>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-[85%]"></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Unbilled Amount</p>
          <p className="text-3xl font-extrabold text-blue-600 mt-1">$7,535 <span className="text-sm font-normal text-slate-500">USD</span></p>
          <p className="text-xs text-slate-400 mt-2">Ready to invoice next cycle</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outstanding Invoices</p>
          <p className="text-3xl font-extrabold text-amber-600 mt-1">$8,800 <span className="text-sm font-normal text-slate-500">(1 invoice)</span></p>
          <p className="text-xs text-amber-600 mt-2">Due in 5 days</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Billed (YTD)</p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">$48,200</p>
          <p className="text-xs text-emerald-600 mt-2">100% payout completion</p>
        </div>
      </div>

      {/* Recent Invoices Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-bold text-slate-900 text-base">Recent Invoices</h2>
          <Link href="/invoices" className="text-xs font-semibold text-blue-600 hover:underline">
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase">
              <tr>
                <th className="px-6 py-3">Invoice #</th>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Period</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">INV-2026-004</td>
                <td className="px-6 py-4 text-slate-700">Acme Corporation</td>
                <td className="px-6 py-4 text-slate-500">Aug 01 - Aug 15, 2026</td>
                <td className="px-6 py-4 font-bold text-slate-900">$8,800.00</td>
                <td className="px-6 py-4">
                  <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold px-2.5 py-1 rounded-full">
                    Sent
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Download PDF</a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">INV-2026-003</td>
                <td className="px-6 py-4 text-slate-700">TechCorp Labs</td>
                <td className="px-6 py-4 text-slate-500">Jul 16 - Jul 31, 2026</td>
                <td className="px-6 py-4 font-bold text-slate-900">$7,700.00</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-full">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Download PDF</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
