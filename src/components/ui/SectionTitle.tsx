// components/ui/SectionTitle.tsx
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle: string
  center?: boolean
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-light mb-2"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-primary ${center ? 'mx-auto' : ''} max-w-lg`}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

export default SectionTitle