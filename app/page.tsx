'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false })
const Services = dynamic(() => import('@/components/Services'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Founder = dynamic(() => import('@/components/Founder'), { ssr: false })
const Values = dynamic(() => import('@/components/Values'), { ssr: false })
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false })
const Technologies = dynamic(() => import('@/components/Technologies'), { ssr: false })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })
const CTA = dynamic(() => import('@/components/CTA'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Founder />
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
