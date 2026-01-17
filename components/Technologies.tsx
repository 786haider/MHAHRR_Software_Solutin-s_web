'use client'

import { motion } from 'framer-motion'

const techStack = [
  {
    category: 'Frontend',
    color: 'primary',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'blue',
    techs: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Go'],
  },
  {
    category: 'Mobile',
    color: 'purple',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'Database',
    color: 'green',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'orange',
    techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    category: 'AI & ML',
    color: 'pink',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
  },
]

export default function Technologies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Technologies We Master</h2>
          <p className="section-subtitle">
            We work with the latest and most reliable technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-display font-bold text-primary-500 mb-4">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 text-gray-700 text-sm rounded-md cursor-pointer transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
