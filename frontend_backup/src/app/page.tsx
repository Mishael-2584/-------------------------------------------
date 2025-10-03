import Hero from '@/components/Hero'
import About from '@/components/About'
import Leadership from '@/components/Leadership'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Leadership />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}
