// pages/index.tsx
import Head from 'next/head'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import BlogPreview from '../components/sections/Blog'
import Contact from '../components/sections/Contact'
import Footer from '../components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuvraj Pal | Frontend Developer</title>
        <meta name="description" content="Personal portfolio of Yuvraj Pal, a frontend developer specializing in React, Next.js, and modern web technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}