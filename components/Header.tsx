'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="home" smooth duration={500} className="cursor-pointer flex items-center gap-3">
              <Image src="/logo.png" alt="MHAHRR Logo" width={40} height={40} className="object-contain" />
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold leading-none">MHAHRR</h1>
                <span className="text-white/70 text-xs">Innovative Software Solution&rsquo;s</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="services"
                  smooth
                  duration={500}
                  className="text-white hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="text-white hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  className="text-white hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="founder"
                  smooth
                  duration={500}
                  className="text-white hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
