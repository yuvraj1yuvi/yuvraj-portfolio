// components/sections/About.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark/95">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-semibold text-light mb-6">
              Who am I?
            </h3>
            <p className="text-light/80 mb-4">
              I'm <span className="text-[#FF9E00]">Yuvraj Pal</span>, a dedicated Software Engineer with a strong foundation in
              computer science and a passion for building modern, scalable web applications.
              I specialize in frontend development using cutting-edge technologies like React,
              Next.js, and Angular, while also being proficient in backend development using Node.js, Express, and MongoDB..
            </p>
            <p className="text-light/80 mb-4">
              I hold a Master's in Computer Applications (MCA) from Harcourt Butler Technical
              University and a Bachelor's in Computer Applications (BCA) from the University
              of Allahabad. Throughout my academic journey, I cultivated a deep understanding
              of programming principles, data structures, algorithms, and full-stack development.
            </p>
            <p className="text-light/80 mb-4">
              Currently, I work as a Software Engineer at Tridev Technologies, where I build
              full-stack web applications, contribute to system architecture, and integrate
              cloud services using AWS. I’ve worked on scalable APIs, implemented secure
              authentication flows, and optimized performance across both client and server.
            </p>
            <p className="text-light/80 mb-6">
              My journey started with static web pages and has grown into crafting complex,
              production-ready applications. I enjoy solving real-world problems with clean code,
              efficient design patterns, and cloud-native solutions — all while keeping user
              experience and accessibility at the forefront.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-xl">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Projects', value: '10+' },
                  { name: 'Experience', value: '1+ Year' },
                  { name: 'Technologies', value: '8+' },
                  { name: 'GitHub Repos', value: '20+' },
                  { name: 'Blog Posts', value: '5+' },
                  { name: 'Coffee Cups', value: '∞' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-dark/80 rounded-lg p-4 text-center border border-light/10"
                  >
                    <h4 className="text-[#FF9E00] text-2xl font-bold mb-1">
                      {item.value}
                    </h4>
                    <p className="text-light/80 text-sm">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About