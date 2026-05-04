import './CTABanner.css'

const CTABanner = () => {
  return (
    <section id="affiliates" className="cta-section">
      <div className="cta-card">
        <div className="cta-glow-tl"></div>
        <div className="cta-glow-br"></div>
        <h2 className="cta-heading">
          Let's join with millions of<br />
          <span>Traders in the world</span>
        </h2>
        <div className="cta-buttons">
          <button className="cta-button cta-primary">Get Funded</button>
          <button className="cta-button cta-secondary">Try Demo</button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
