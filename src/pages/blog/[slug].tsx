// pages/blog/[slug].tsx
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../../components/ui/Navbar'
import Link from 'next/link'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'

// Mock data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a new Next.js project with TypeScript and best practices for development.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    slug: 'getting-started-with-nextjs-typescript',
    content: `
      <h2>Introduction</h2>
      <p>Next.js has become one of the most popular React frameworks for building production-ready applications. When combined with TypeScript, you get a powerful development experience with type safety and improved code quality.</p>
      
      <h2>Setting Up the Project</h2>
      <p>To create a new Next.js project with TypeScript, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app --typescript</code></pre>
      
      <h2>TypeScript Configuration</h2>
      <p>Next.js comes with built-in TypeScript support. The tsconfig.json file will be automatically created with optimal defaults.</p>
      
      <h2>Conclusion</h2>
      <p>Using TypeScript with Next.js provides numerous benefits for your development workflow and application stability.</p>
    `,
  },
  // ... other posts
]

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  const post = blogPosts.find(post => post.slug === slug)

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{post.title} | Yuvraj Pal</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-light hover:text-primary transition-colors mb-8"
          >
            <FiArrowLeft className="mr-2" /> Back to Blog
          </Link>

          <article className="prose prose-invert max-w-none">
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center text-light/60">
                <FiCalendar className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-light/60">
                <FiClock className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-light mb-6">
              {post.title}
            </h1>

            <div
              className="text-light/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <footer className="bg-dark text-light py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-light/60">© {new Date().getFullYear()} Yuvraj Pal. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}