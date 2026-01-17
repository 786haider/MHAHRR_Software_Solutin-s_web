import type { Metadata } from 'next'
import { Space_Grotesk, Sora } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MHAHRR Software Solutions | Custom Software Development Company',
  description: 'Leading software development company specializing in web development, mobile apps, cloud solutions, AI/ML, and digital transformation services.',
  keywords: 'software development, web development, mobile apps, cloud solutions, AI, machine learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${sora.variable} font-body antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
