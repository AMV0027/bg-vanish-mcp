import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import HowItWorks   from './components/HowItWorks'
import Features     from './components/Features'
import Installation from './components/Installation'
import Integrations from './components/Integrations'
import DocsReference from './components/DocsReference'
import CTA          from './components/CTA'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="bg-grid">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Installation />
        <Integrations />
        <DocsReference />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
