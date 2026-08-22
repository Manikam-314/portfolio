import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manikavasagam S | Java Backend & Full Stack Engineer',
  description: 'Portfolio of Manikavasagam S - Software Engineer specializing in distributed systems, microservices, Spring Boot, React, Kafka, Redis, PostgreSQL, and cloud infrastructure.',
  keywords: [
    'Manikavasagam S',
    'Java Backend Engineer',
    'Full Stack Engineer',
    'Spring Boot',
    'Distributed Systems',
    'Microservices',
    'Kafka',
    'Redis',
    'PostgreSQL',
    'System Design'
  ],
  authors: [{ name: 'Manikavasagam S' }],
  creator: 'Manikavasagam S',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-900 bg-[#FAFAFA] dark:bg-[#0A0A0A] dark:text-[#F9FAFB] transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
