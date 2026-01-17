'use client'

import { motion } from 'framer-motion'

const highlights = [
  { value: '98%', label: 'Client Satisfaction', gradient: 'from-primary-500 to-primary-700' },
  { value: '24/7', label: 'Support Available', gradient: 'from-primary-400 to-primary-600' },
  { value: '15+', label: 'Countries Served', gradient: 'from-primary-600 to-primary-800' },
  { value: '30+', label: 'Technologies', gradient: 'from-primary-500 to-primary-700' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">About MHAHRR</h2>
          <p className="section-subtitle">
            We are a team of passionate developers, designers, and strategists dedicated to
            transforming businesses through innovative technology solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold text-primary-500 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              To empower businesses with cutting-edge software solutions that drive growth,
              efficiency, and innovation. We believe in creating technology that not only meets
              current needs but anticipates future challenges.
            </p>
            <p className="text-lg text-gray-600 leading-8">
              Our team combines technical excellence with business acumen to deliver solutions that
              make a real impact. From startups to enterprises, we partner with organizations to
              build scalable, secure, and user-friendly applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-lg text-white shadow-lg`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="text-3xl font-display font-bold mb-2"
                >
                  {item.value}
                </motion.div>
                <div className="text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
