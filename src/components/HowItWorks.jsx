import cubeGlow from '../assets/cubeglow.png'
import './HowItWorks.css'

function HowItWorks() {
  return (
    <section id="trading-rules" className="how-it-works-section">
      <div className="big-card-wrapper">
        <div className="big-card how-it-works-card">
          {/* Top Row */}
          <div className="top-row">
            {/* Left Side */}
             <div className="left-side" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="label">HOW IT WORKS</div>
              <h2 className="main-heading">
                Maximum Profit &<br />
                Secure <span className="highlight">Trading Platform</span>
              </h2>
              <p className="description">
                Choose the evaluation based on your preference to become an Empire Trader.
              </p>
               <button className="get-funded-btn hiw-btn">Get Funded</button>
            </div>

            {/* Right Side - Cube Glow Image */}
            <div className="cube-glow-container">
              <img src={cubeGlow} alt="cube" className="cube-glow-img" />
            </div>
          </div>

          {/* Bottom Row - 3 Cards (Pure JSX/CSS) */}
          <div className="bottom-row">
            {/* Card 1 - Challenge Phase */}
            <div className="info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5h4"/>
                  <path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/>
                  <path d="M12 17v4"/>
                  <path d="M8 21h8"/>
                  <path d="M6 5h12v7a6 6 0 0 1-12 0V5z"/>
                </svg>
              </div>
              <h3 className="card-title">Challenge Phase</h3>
              <p className="card-desc">Choose a Challenge account and showcase your skills.</p>
            </div>

            {/* Card 2 - Get Funded Account */}
            <div className="info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 22h18"/>
                  <path d="M6 18v-7"/>
                  <path d="M10 18v-7"/>
                  <path d="M14 18v-7"/>
                  <path d="M18 18v-7"/>
                  <path d="M12 2L2 7h20L12 2z"/>
                </svg>
              </div>
              <h3 className="card-title">Get Funded Account</h3>
              <p className="card-desc">Pass your challenge and get a simulated funded account.</p>
            </div>

            {/* Card 3 - Get Rewarded */}
            <div className="info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v2"/>
                  <path d="M12 16v2"/>
                  <path d="M8.5 9.5A3.5 3.5 0 0 1 12 8c1.93 0 3.5 1.12 3.5 2.5S13.93 13 12 13s-3.5 1.12-3.5 2.5S10.07 18 12 18a3.5 3.5 0 0 0 3.5-1.5"/>
                </svg>
              </div>
              <h3 className="card-title">Get Rewarded</h3>
              <p className="card-desc">Earn your share of the profits and receive your payout within 24 hrs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
