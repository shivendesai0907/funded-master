import opacityLogo from '../assets/opacity.png'
import './WhyUs.css'

function WhyUs() {
  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v2M12 16v2M8.5 9.5A3.5 3.5 0 0 1 12 8c1.93 0 3.5 1.12 3.5 2.5S13.93 13 12 13s-3.5 1.12-3.5 2.5S10.07 18 12 18a3.5 3.5 0 0 0 3.5-1.5"/>
        </svg>
      ),
      title: "Lower Spreads",
      desc: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <ellipse cx="12" cy="12" rx="5" ry="8"/>
        </svg>
      ),
      title: "$0 Minimum Acc Size",
      desc: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          <line x1="12" y1="12" x2="12" y2="16"/>
          <line x1="10" y1="14" x2="14" y2="14"/>
        </svg>
      ),
      title: "Range of Markets",
      desc: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      title: "No Fees to Deposit",
      desc: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "24/7 Support",
      desc: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2.5" width="26" height="26">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Low Latency",
      desc: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms."
    }
  ]

  return (
    <section id="why-us" className="why-us-section">
      <h2 className="why-us-heading">
        Why We're <span className="highlight">Top Rated PropFirm</span>
      </h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-watermark">
              <img src={opacityLogo} alt="" />
            </div>
            <div className="icon-circle">
              {card.icon}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
