import Link from 'next/link';

export default function InvoicesListPage() {
  const sampleInvoices = [
    {
      id: 'inv_1',
      number: 'INV-2026-004',
      client: 'Acme Corporation',
      date: '2026-08-15',
      dueDate: '2026-08-30',
      amount: 8800.0,
      status: 'sent',
    },
    {
      id: 'inv_2',
      number: 'INV-2026-003',
      client: 'TechCorp Labs',
      date: '2026-07-31',
      dueDate: '2026-08-15',
      amount: 7700.0,
      status: 'paid',
    },
    {
      id: 'inv_3',
      number: 'INV-2026-002',
      client: 'NextGen Ventures',
      date: '2026-07-15',
      dueDate: '2026-07-30',
      amount: 6600.0,
      status: 'paid',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Invoices</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track your client invoices and payments.</p>
        </div>
        <Link
          href="/invoices/new"
          className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
        >
          <span>+</span> Create New Invoice
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-3.5">Invoice #</th>
              <th className="px-6 py-3.5">Client</th>
              <th className="px-6 py-3.5">Issue Date</th>
              <th className="px-6 py-3.5">Due Date</th>
              <th className="px-6 py-3.5">Amount</th>
              <th className="px-6 py-3.5">Status</th>
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sampleInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-bold text-slate-900">{inv.number}</td>
                <td className="px-6 py-4 text-slate-700">{inv.client}</td>
                <td className="px-6 py-4 text-slate-500">{inv.date}</td>
                <td className="px-6 py-4 text-slate-500">{inv.dueDate}</td>
                <td className="px-6 py-4 font-bold text-slate-900">${inv.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      inv.status === 'paid'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {inv.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-semibold text-blue-600 hover:underline mr-4">View</button>
                  <button className="text-xs font-semibold text-slate-600 hover:underline">PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
