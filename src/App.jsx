import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Focus from './components/Focus'
import Portfolio from './components/Portfolio'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* three fixed layers behind the page: shifting gradient, neon glows, stars */}
      <div className="aurora-layer fixed inset-0 -z-30" />
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-70"
        style={{
          background: [
            'radial-gradient(ellipse at top left, rgba(0,255,170,.15) 0%, transparent 40%)',
            'radial-gradient(ellipse at top right, rgba(0,170,255,.15) 0%, transparent 40%)',
            'radial-gradient(ellipse at bottom left, rgba(170,0,255,.10) 0%, transparent 40%)',
            'radial-gradient(ellipse at bottom right, rgba(255,0,170,.10) 0%, transparent 40%)',
          ].join(','),
        }}
      />
      <Starfield />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Focus />
        <Portfolio />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
