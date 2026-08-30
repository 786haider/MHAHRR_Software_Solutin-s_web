'use client'

import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Our Founder</h2>
          <p className="section-subtitle">
            Meet the visionary leader driving innovation and excellence at MHAHRR
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100/50 space-y-8">
          <div className="text-center space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-extrabold text-gray-900 leading-tight"
            >
              Haider Hussain
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg font-semibold text-primary-500"
            >
              CEO & Founder
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            <p>
              Haider Hussain is the driving force behind MHAHRR, serving as the <strong>CEO & Founder of the MHAHRR Group of Companies</strong>, as well as the <strong>Founder of MHAHRR Naturals</strong>. Under his leadership, the organization has grown into a versatile technology and enterprise hub.
            </p>
            
            <p>
              With a deep passion for digital transformation and enterprise development, he has led multiple successful products and client projects, empowering businesses with the tools needed to succeed in the modern digital landscape.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-primary-50/40 border-t-4 md:border-t-0 md:border-l-4 border-primary-500 p-8 rounded-xl relative overflow-hidden max-w-3xl mx-auto"
          >
            <span className="absolute top-2 right-4 text-7xl font-serif text-primary-200/50 select-none pointer-events-none">
              “
            </span>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-2 text-center md:text-left">
              Our Vision
            </h4>
            <p className="text-xl font-medium text-gray-800 italic leading-relaxed relative z-10 text-center md:text-left">
              &ldquo;My vision is to deliver robust business solutions, software, and websites directly to peoples&apos; doorsteps without any hurdles. We dedicate 100% effort to every project to ensure absolute client satisfaction and success.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
