'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import About from '@/components/About'
import Values from '@/components/Values'
import Portfolio from '@/components/Portfolio'
import Technologies from '@/components/Technologies'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Values />
      <Portfolio />
      <Technologies />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
