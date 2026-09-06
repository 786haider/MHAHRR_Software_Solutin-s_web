'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="MHAHRR Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-display font-bold text-white">MHAHRR Software Solutions</span>
            </div>
            <p className="text-sm">
              Leading software development company transforming businesses with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML'].map((item) => (
                <li key={item}>
                  <Link
                    to="services"
                    smooth
                    duration={800}
                    className="hover:text-primary-400 transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Portfolio', 'Contact'].map((item, index) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(' ', '')}
                    smooth
                    duration={800}
                    className="hover:text-primary-400 transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/haider-hussain-siddique-501409397/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bvq1X7KN7TEGl7uA9fiNWeA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0A66C2] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.63 1.64 1.64 0 0 0 1.66 1.63 1.64 1.64 0 0 0 1.65-1.63 1.64 1.64 0 0 0-1.65-1.63Z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm"
        >
          <p>&copy; 2024 MHAHRR Software Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
