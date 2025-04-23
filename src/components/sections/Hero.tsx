// components/sections/Hero.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-dark/90"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-color1/10 via-transparent to-transparent opacity-50 -z-10" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">
            Hi, I'm <span className="text-[#FF9E00]">Yuvraj Pal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-light mb-6">
            Software Engineer
          </h2>
          <p className="text-light/80 mb-8 max-w-lg">
            I build exceptional digital experiences with modern web technologies.
            Currently working as a Software Engineer at <span className="text-[#FF9E00]">Tridev Technologies</span>.
          </p>
          <div className="flex space-x-4 mb-12">
            <a
              href="#projects"
              className="bg-[#FF9E00] hover:bg-[#FF9E00]/90 text-dark px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-[#FF9E00]/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[#FF9E00] text-[#FF9E00] hover:bg-[#FF9E00]/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yuvraj1yuvi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-[#FF9E00] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yuvraj-pal-807a10194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-[#FF9E00] transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:yuvraj15052001@gmail.com"
              className="text-light hover:text-[#FF9E00] transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9E00] to-[#FF9E00]/50 rounded-full blur-xl opacity-30 -z-10" />
            <Image
              src="/images/profile-pic.png"
              alt="Yuvraj Pal"
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="rounded-full border-4 border-light/10 object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FiArrowDown className="text-[#FF9E00] hover:text-[#FF9E00]/80 transition-colors" size={32} />
      </motion.a>
    </section>
  )
}

export default Hero