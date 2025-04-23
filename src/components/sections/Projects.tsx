// components/sections/Projects.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// This would ideally come from an API or static data
const projects = [
  {
    id: 1,
    title: 'Artistry Gallery',
    description:
      'Immerse yourself in beautifully presented digital art collections with intuitive browsing and search features.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yuvraj1yuvi/Art-gallery',
    liveUrl: 'https://artgallery9.netlify.app/',
    image: '/images/ArtGallery.png',
  },
  {
    id: 2,
    title: 'Ecommerce App',
    description:
      'A feature-rich, modern e-commerce application built with Next.js and TypeScript, offering a seamless shopping.',
    tags: ['Next.js', 'React', , 'Tailwind CSS'],
    githubUrl: 'https://github.com/yuvraj1yuvi/Ecommerce',
    liveUrl: 'https://ecommerce-demo1.netlify.app/',
    image: '/images/Ecommerce.png',
  },
  {
    id: 3,
    title: 'Next-Gen Learning',
    description:
      'Developed a scalable LMS platform with course browsing, purchasing, and feedback features to enhance user experience.',
    tags: ['React.js', 'CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yuvraj1yuvi/next-gen-learning',
    liveUrl: 'https://next-gen-learning.netlify.app/',
    image: '/images/next-gen.png',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark/95">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Projects"
          subtitle="Some of my recent work"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-dark/80 border border-light/10 rounded-xl overflow-hidden hover:border-[#FF9E00]/30 transition-all"
            >
              <div className="h-48 bg-light/10 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-light/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#FF9E00]/10 text-[#FF9E00] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-light hover:text-[#FF9E00] transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-light hover:text-[#FF9E00] transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yuvraj1yuvi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#FF9E00] text-[#FF9E00] hover:bg-[#FF9E00]/10 rounded-lg transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects