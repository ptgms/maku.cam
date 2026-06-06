import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Concept from './components/Concept.jsx'
import Features from './components/Features.jsx'
import MakuPlus from './components/MakuPlus.jsx'
import AppIcons from './components/AppIcons.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './components/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Features />
        <MakuPlus />
        <AppIcons />
      </main>
      <Footer />
    </>
  )
}
