'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and innovative solutions to solve complex business challenges, staying ahead of industry trends.',
  },
  {
    title: 'Client Success',
    description:
      'Your success is our success. We build long-term partnerships and deliver measurable results that drive your business forward.',
  },
  {
    title: 'Quality Excellence',
    description:
      'We maintain the highest standards in software development with rigorous testing processes and clean code architecture.',
  },
  {
    title: 'Collaborative Spirit',
    description:
      'Through open communication and agile methodologies, we create environments where great ideas flourish and projects succeed.',
  },
  {
    title: 'Integrity & Transparency',
    description:
      'We conduct business with the highest ethical standards and maintain honest communication in all our interactions.',
  },
  {
    title: 'Continuous Learning',
    description:
      'We invest in growth through continuous learning to deliver modern, efficient solutions using the latest best practices.',
  },
]

export default function Values() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide our work and define our company culture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="p-6 border-2 border-primary-200 rounded-xl bg-white hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-700 hover:border-transparent transition-all duration-300 h-full shadow-md hover:shadow-xl">
                <h3 className="text-xl font-display font-bold text-primary-500 group-hover:text-white mb-3 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
