import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pagina Invoicing | Contractor Time & Billing',
  description: 'Automated daily time tracking and fortnightly invoicing for software contractors.',
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
                <span className="bg-blue-600 text-white rounded-lg px-2 py-0.5 text-base">P</span>
                <span>Pagina <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider ml-1">Invoicing</span></span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
                  Dashboard
                </Link>
                <Link href="/time" className="hover:text-blue-600 transition-colors">
                  Time Logs
                </Link>
                <Link href="/invoices" className="hover:text-blue-600 transition-colors">
                  Invoices
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/invoices/new"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors"
              >
                + New Invoice
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pagina Invoicing • A product by <a href="https://pagina.dev" className="underline hover:text-slate-800">Pagina One</a></p>
        </footer>
      </body>
    </html>
  );
}
