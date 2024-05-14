import NavMenu from '@/src/components/NavMenu'
import '@/src/styles/globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'PAGINA ONE',
  description: 'Still in development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className={dm_sans.variable}
    >
      <body>
        <NavMenu />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
