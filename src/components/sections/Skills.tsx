// components/sections/Skills.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi'
import React from 'react'

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode className="text-[#FF9E00]" size={24} />,
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: <FiCpu className="text-[#FF9E00]" size={24} />,
    items: [
      { name: 'Java', level: 80 },
      { name: 'Node.js', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: <FiDatabase className="text-[#FF9E00]" size={24} />,
    items: [
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    category: 'Other',
    icon: <FiLayers className="text-[#FF9E00]" size={24} />,
    items: [
      { name: 'Git', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies I work with"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark/80 border border-light/10 rounded-xl p-6 hover:border-[#FF9E00]/30 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-2 bg-dark rounded-lg">
                  {React.cloneElement(skill.icon, { className: "w-6 h-6 text-[#FF9E00]" })}
                </div>
                <h3 className="text-xl font-semibold text-light">
                  {skill.category}
                </h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-light/80">{item.name}</span>
                      <span className="text-[#FF9E00]">{item.level}%</span>
                    </div>
                    <div className="w-full bg-[#404260]/20 rounded-full h-2">
                      <div
                        className="bg-[#404260] h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills