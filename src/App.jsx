import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TheShift from './components/TheShift'
import WhyCodeIsNotEnough from './components/WhyCodeIsNotEnough'
import TheStack from './components/TheStack'
import HowItWorks from './components/HowItWorks'
import WhyThisMatters from './components/WhyThisMatters'
import ForEnterprises from './components/ForEnterprises'
import Credibility from './components/Credibility'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Legal from './components/Legal'

function HomePage({ openContact }) {
  return (
    <>
      <main>
        <Hero />
        <TheShift />
        <WhyCodeIsNotEnough />
        <TheStack />
        <HowItWorks />
        <WhyThisMatters />
        <ForEnterprises />
        <Credibility />
      </main>
      <Footer onContact={openContact} />
    </>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  // The router is supplied by the caller: BrowserRouter in main.jsx, StaticRouter
  // in entry-server.jsx when prerendering.
  return (
    <>
      <Nav onContact={openContact} />
      <Routes>
        <Route path="/" element={<HomePage openContact={openContact} />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
