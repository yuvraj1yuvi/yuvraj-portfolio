// components/sections/Blog.tsx
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

// Mock blog posts data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a new Next.js project with TypeScript and best practices for development.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs-typescript',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    excerpt: 'Tips and tricks for using Tailwind CSS effectively in your projects to speed up development.',
    date: 'April 28, 2023',
    readTime: '8 min read',
    slug: 'mastering-tailwind-css',
  },
  {
    id: 3,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Essential techniques to optimize your React applications for better performance.',
    date: 'March 10, 2023',
    readTime: '10 min read',
    slug: 'react-performance-optimization',
  },
]

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Blog"
          subtitle="Thoughts, tutorials, and insights"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark/80 border border-light/10 rounded-xl overflow-hidden hover:border-[#FF9E00]/30 transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-light/60">{post.date}</span>
                  <span className="text-xs bg-[#FF9E00]/10 text-[#FF9E00] px-2 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-light mb-3">
                  {post.title}
                </h3>
                <p className="text-light/80 mb-6">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#FF9E00] hover:text-[#FF9E00]/80 transition-colors"
                >
                  Read more <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-[#FF9E00] text-[#FF9E00] hover:bg-[#FF9E00]/10 rounded-lg transition-colors"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview