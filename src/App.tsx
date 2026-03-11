import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Loesung from './sections/Loesung'
import Process from './sections/Process'
import Features from './sections/Features'
import Industries from './sections/Industries'
import WhyUs from './sections/WhyUs'
import Future from './sections/Future'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Contact from './sections/Contact'
import VoiceBotWidget from './components/VoiceBotWidget'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Loesung />
        <Process />
        <Features />
        <Industries />
        <WhyUs />
        <Future />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <VoiceBotWidget />
    </>
  )
}
