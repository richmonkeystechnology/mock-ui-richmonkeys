import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientTranslationProvider from '../components/ClientTranslationProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Points Rewards App',
  description: 'Modern mobile app for spending points and rewards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientTranslationProvider>
          {children}
        </ClientTranslationProvider>
      </body>
    </html>
  )
}