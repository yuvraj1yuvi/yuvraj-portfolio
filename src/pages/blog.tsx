// pages/blog.tsx
import Head from 'next/head'
import Navbar from '../components/ui/Navbar'
import SectionTitle from '../components/ui/SectionTitle'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a new Next.js project with TypeScript and best practices for development.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs-typescript',
    content: 'Full blog post content would go here...',
  },
  // ... other posts
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Yuvraj Pal</title>
        <meta name="description" content="Blog posts by Yuvraj Pal about web development, React, and more." />
      </Head>

      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Blog"
            subtitle="Thoughts, tutorials, and insights"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/80 border border-light/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-light/60">{post.date}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-light mb-3">
                    {post.title}
                  </h3>
                  <p className="text-light/80 mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-light hover:text-primary transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-dark border-t border-light/10 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-light/60">© {new Date().getFullYear()} Yuvraj Pal. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}