// components/sections/Experience.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { FiBriefcase, FiCalendar, FiBook } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Tridev Technologies',
    duration: 'Sep 2024 - Present',
    description: [
      'Built scalable full-stack applications using React, Angular, Node.js, and MongoDB',
  'Integrated AWS services like Lambda and S3 for cloud-native functionality',
  'Collaborated cross-functionally to design and implement user-focused features',
  'Contributed to system architecture, code reviews, and technical documentation',
    ],
  },
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'Alfabeto Global',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Developed and maintained web applications using React and Angular',
      'Collaborated with the team to implement new features and improve user experience',
      'Participated in code reviews and contributed to technical documentation',
    ],
  }
]

const educations = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Harcourt Butler Technical University',
    duration: '2022 - 2024',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Allahabad',
    duration: '2018 - 2021',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experience & Education"
          subtitle="My journey so far"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-light mb-8 flex items-center">
              <FiBriefcase className="text-[#FF9E00] mr-3" size={24} />
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#FF9E00]" />
                  <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-light/10" />
                  <div className="bg-dark/80 border border-light/10 rounded-lg p-6 hover:border-[#FF9E00]/30 transition-colors">
                    <h4 className="text-xl font-semibold text-light mb-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center text-light/60 mb-4">
                      <FiCalendar className="mr-2 text-[#FF9E00]" size={14} />
                      <span className="text-sm">{exp.duration}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-light/80 flex">
                          <span className="text-[#FF9E00] mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-light mb-8 flex items-center">
              <FiBook className="text-[#FF9E00] mr-3" size={24} />
              Education
            </h3>
            <div className="space-y-8">
              {educations.map((edu) => (
                <div key={edu.id} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#FF9E00]" />
                  <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-light/10" />
                  <div className="bg-dark/80 border border-light/10 rounded-lg p-6 hover:border-[#FF9E00]/30 transition-colors">
                    <h4 className="text-xl font-semibold text-light mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-light/60 mb-4">
                      <FiCalendar className="mr-2 text-[#FF9E00]" size={14} />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <p className="text-light/80">
                      <span className="text-[#FF9E00] mr-2">▹</span>
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience