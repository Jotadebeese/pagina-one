import Link from 'next/link';

export default function InvoicingHomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center max-w-3xl mx-auto space-y-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
        🚀 Built for Software Contractors & Agencies
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Contractor time tracking & invoicing, <span className="text-blue-600">automated.</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
        Stop wrestling with spreadsheets and manual calculations. Log daily hours in seconds, aggregate fortnightly pay cycles, and generate pixel-perfect PDF invoices in 1 click.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/dashboard"
          className="rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-all hover:scale-105"
        >
          Open Contractor Dashboard →
        </Link>
        <Link
          href="/time"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
        >
          Log Daily Hours
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-12 w-full">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-2xl mb-3">⏱️</div>
          <h3 className="font-bold text-slate-900 text-base mb-1">Quick Time Logging</h3>
          <p className="text-sm text-slate-600">Log daily hours with client tags, hourly rates, and task notes in under 5 seconds.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-2xl mb-3">📅</div>
          <h3 className="font-bold text-slate-900 text-base mb-1">Fortnightly Aggregator</h3>
          <p className="text-sm text-slate-600">Auto-calculate 14-day cycles, overtime, subtotal, and tax breakdowns with zero manual math.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-2xl mb-3">📄</div>
          <h3 className="font-bold text-slate-900 text-base mb-1">Pixel-Perfect PDF Invoices</h3>
          <p className="text-sm text-slate-600">Compiled server-side into lightweight, immutable PDF invoices with your bank/wire details.</p>
        </div>
      </div>
    </div>
  );
}
