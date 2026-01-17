'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

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
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="ml-2 text-xl font-display font-bold text-white">MHAHRR</span>
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
              {['L', 'G'].map((letter, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="hover:text-primary-400 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fontWeight="bold">
                      {letter}
                    </text>
                  </svg>
                </motion.a>
              ))}
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
