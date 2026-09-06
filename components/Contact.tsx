'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: 'Web Development', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let&apos;s talk about how we can help</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+92 310 1318508"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>AI & Machine Learning</option>
                  <option>DevOps & CI/CD</option>
                  <option>IT Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:+923101318508" className="text-gray-600 hover:text-primary-600 transition-colors">
                        +92 3101318508
                      </a>
                      <a href="tel:+923107617396" className="text-gray-600 hover:text-primary-600 transition-colors">
                        +92 3107617396
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:haiderhussainsiddique@gmail.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                    >
                      haiderhussainsiddique@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Karachi, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/haider-hussain-siddique-501409397/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bvq1X7KN7TEGl7uA9fiNWeA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.63 1.64 1.64 0 0 0 1.66 1.63 1.64 1.64 0 0 0 1.65-1.63 1.64 1.64 0 0 0-1.65-1.63Z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
