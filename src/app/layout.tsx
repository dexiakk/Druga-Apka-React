import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koszyk zakupów dla Gasia',
  description: 'Ta strona umożliwi ci kupowanie różnego typu majtek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-full'>
          <Header />
        </div>
        {children}
        
        </body>
    </html>
  )
}
