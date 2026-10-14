import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pagina — Contractor Time Tracking & Invoicing Engine',
  description:
    'A high-performance, precision time-to-invoice engine for software contractors. Zero bloat, instant logging, and pixel-perfect immutable PDF invoices.',
  icons: {
    icon: '/images/square_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#eeeeee] text-[#181411]">
        {children}
      </body>
    </html>
  );
}
