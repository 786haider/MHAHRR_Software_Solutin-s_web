'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Resume Builder App',
    description: 'An interactive web application allowing users to build, customize, and download professional resumes with dynamic templates.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'PDF Generator'],
    gradient: 'from-teal-500 to-emerald-600',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    link: 'https://resume-builder-app-web.vercel.app/',
    image: '/resume_builder_ap_thumbnail.jfif'
  },
  {
    title: 'MHAHRR Naturals',
    description: 'A premium e-commerce platform showcasing organic and natural products, featuring shopping cart functionality and smooth product filtering.',
    tags: ['React', 'Next.js', 'E-Commerce', 'TailwindCSS'],
    gradient: 'from-emerald-600 to-green-700',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    link: 'https://web-mhahrr-natural-s-2lfh.vercel.app/',
    image: "/mhahrr_natural's_thumbnail.jpg"
  },
  {
    title: 'Naturals Social Platforms Hub',
    description: "A unified digital landing hub linking clients and followers to the brand's official social media profiles, support channels, and store locations.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    gradient: 'from-indigo-500 to-purple-600',
    icon: 'M8.684 10.742l4.628-2.314m0 0a3 3 0 10-2.243-4.077L6.445 6.666a3 3 0 100 4.668l4.628 2.314m0 0a3 3 0 102.243-4.077L8.684 13.258',
    link: 'https://mhahrr-natural-s-social-platforms-l.vercel.app/',
    image: '/social_platforms_link_hub_thumbnail.jfif'
  },
  {
    title: 'MHAHRR Corporate Web',
    description: 'The official digital agency portal for MHAHRR Software Solutions, highlighting development services, tech stack, and digital products.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    gradient: 'from-primary-500 to-primary-700',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    link: 'https://mhahrr-software-solutin-s-web.vercel.app/'
  },
  {
    title: 'Malik International Logistics',
    description: 'Global logistics tracking and landing platform designed for commercial shipping, freight forwarding, and supply chain management.',
    tags: ['React', 'TailwindCSS', 'Responsive Web', 'UI/UX Design'],
    gradient: 'from-orange-500 to-amber-600',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zm0 0h4l4-4V8h-8v8z',
    link: 'https://malik-international-logictics-web.vercel.app/',
    image: '/malik_internaltion_logistic_thumbnail.jfif'
  },
  {
    title: 'MH Enterprises',
    description: 'A comprehensive corporate profile displaying diversified business operations, corporate services, trading portfolios, and testimonials.',
    tags: ['Next.js', 'TailwindCSS', 'SEO Optimized', 'Enterprise'],
    gradient: 'from-blue-600 to-indigo-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    link: 'https://mhenterprizes-web.vercel.app/',
    image: '/mh_enterprices_thumbnail.jfif'
  },
  {
    title: 'HM Marriage Bureau',
    description: 'A modern, secure, and user-friendly matrimonial matching and profile search platform helping people discover life partners.',
    tags: ['React', 'Next.js', 'Database', 'Secure Profiles'],
    gradient: 'from-rose-500 to-pink-600',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: 'https://hm-marriage-beauro-web.vercel.app/',
    image: '/hm_marriage_beuro_thumbnail.jfif'
  },
  {
    title: 'Employee Card Generator',
    description: 'An interactive corporate utility tool built to quickly generate, design, and download customized professional employee ID cards.',
    tags: ['JavaScript', 'Canvas API', 'CSS Grid', 'Utility App'],
    gradient: 'from-violet-600 to-purple-800',
    icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-6 4a3 3 0 100 6h4a3 3 0 100-6h-4z',
    link: 'https://eploy-card-generator-app-for-mhahrr.vercel.app/',
    image: '/employ_card_generator_ap_thumbnail.jfif'
  },
  {
    title: 'History of Artificial Intelligence',
    description: 'An interactive, rich-media educational timeline detailing the history, major breakthroughs, and evolution of Artificial Intelligence.',
    tags: ['HTML5', 'CSS3', 'Interactive UI', 'Aesthetic Timeline'],
    gradient: 'from-cyan-500 to-blue-600',
    icon: 'M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 3.536 3.001 3.001 0 01-3.536-3.536z',
    link: 'https://history-of-artificial-intelligence-two.vercel.app/',
    image: '/history_of_ai_thumbnail.jfif'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer block h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative border border-gray-100/50">
                {/* Clickable Overlay Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${project.title}`}
                />

                <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gray-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  )}

                  {!project.image && (
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <svg
                        className="w-20 h-20 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
                      </svg>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index % 3) * 0.1 + i * 0.05 }}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-primary-500 font-semibold inline-flex items-center group-hover:underline mt-auto">
                    Visit Live Site
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
