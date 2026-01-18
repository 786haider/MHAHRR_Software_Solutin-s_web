
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const circle1Ref = useRef<HTMLDivElement>(null)
  const circle2Ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // GSAP animations for background circles
    if (circle1Ref.current && circle2Ref.current) {
      gsap.to(circle1Ref.current, {
        x: 100,
        y: 50,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      gsap.to(circle2Ref.current, {
        x: -80,
        y: -60,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [mounted])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(30, 178, 166, 0.4)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient text-white pt-20"
    >
      {/* Animated background elements */}
      <div
        ref={circle1Ref}
        className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"
      />
      <div
        ref={circle2Ref}
        className="absolute bottom-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-white/10 rounded-full blur-3xl"
      />
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 leading-tight"
          >
            Transform Your Business with
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block mt-2 text-shadow"
            >
              Cutting-Edge Technology
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Leading software development company specializing in web development, mobile apps,
            cloud solutions, and AI/ML integration
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="contact" smooth duration={800}>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            <Link to="portfolio" smooth duration={800}>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-all text-lg w-full sm:w-auto"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <svg
                className="w-6 h-6 mx-auto text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
