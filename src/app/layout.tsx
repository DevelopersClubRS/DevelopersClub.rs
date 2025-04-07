import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developers Club',
  description: 'Mesto okupljanja IT profesionalaca, gde se razmenjuju ideje, iskustva i znanje.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
