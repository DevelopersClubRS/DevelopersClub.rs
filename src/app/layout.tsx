import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developers Club',
  description: 'Mesto okupljanja IT profesionalaca, gde se razmenjuju ideje, iskustva i znanje.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="18045f12-37bd-4c05-857e-68f6f7b29f01"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
