// components/sections/Contact.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false)
        if (formRef.current) {
          formRef.current.reset()
        }
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [isSubmitted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/mblgnjbg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together"
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          {isSubmitted ? (
            <div className="text-center p-8 bg-dark/50 border border-[#FF9E00]/20 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#FF9E00] mb-4">Thank You!</h3>
              <p className="text-light/80">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-[#FF9E00] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-[#FF9E00] transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-[#FF9E00] transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF9E00] hover:bg-[#FF9E00]/90 text-dark px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-[#FF9E00]/20"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact