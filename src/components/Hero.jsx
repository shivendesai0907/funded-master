import HeroImage from '../assets/hero.png'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
