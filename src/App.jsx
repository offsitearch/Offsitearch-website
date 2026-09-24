import { StoreProvider } from './ui/Store'
import Topbar from './components/Topbar'
import LandingHero from './components/LandingHero'
import Journey from './components/Journey'
import Ribbon from './components/Ribbon'
import Workflow from './components/Workflow'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Modals from './components/Modals'

export default function App() {
  return (
    <StoreProvider>
      <div className="navbar-wrapper">
        <Topbar />
      </div>

      <main id="main-content">
        <LandingHero />
        <Journey />
        <Ribbon />
        <Workflow />
        <Portfolio />
        <Services />
        <Pricing />
        <Faq />
      </main>

      <Footer />
      <Modals />
    </StoreProvider>
  )
}