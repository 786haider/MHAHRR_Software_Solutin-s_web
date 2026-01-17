'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What services does MHAHRR offer?',
    answer:
      'We offer comprehensive software development services including web development, mobile app development, cloud solutions, AI/ML integration, DevOps services, and IT consulting. Our team specializes in custom solutions tailored to your specific business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and requirements. A simple website might take 4-6 weeks, while complex enterprise applications can take 3-6 months. We provide detailed timelines during the consultation phase and use agile methodologies to ensure timely delivery.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, complexity, and timeline. We provide transparent quotes after understanding your requirements.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes! We offer comprehensive post-launch support including bug fixes, updates, security patches, and feature enhancements. We also provide 24/7 monitoring and maintenance packages to ensure your application runs smoothly.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      "Absolutely! We seamlessly integrate with existing teams and workflows. Whether you need to augment your team with specialized skills or collaborate on specific project phases, we're flexible and adaptable to your working style.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Frequently Asked Questions</h2>
          <p className="section-subtitle">Got questions? We've got answers</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
