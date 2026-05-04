import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import TradingAssets from './components/TradingAssets'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import WhyUs from './components/WhyUs'
import EarningsCalculator from './components/EarningsCalculator'
import TopTraders from './components/TopTraders'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <TradingAssets />
      <HowItWorks />
      <PricingSection />
      <WhyUs />
      <EarningsCalculator />
      <TopTraders />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App
