import { useState } from 'react'
import './PricingSection.css'

function PricingSection() {
  const [activeTab, setActiveTab] = useState('Instant')
  const [activeSize, setActiveSize] = useState('$50K')

  const prices = {
    'Instant': { '$25K': '$449', '$50K': '$749', '$100K': '$1,299' },
    '1-Step':  { '$25K': '$299', '$50K': '$549', '$100K': '$897'  },
    '2-Step':  { '$25K': '$199', '$50K': '$349', '$100K': '$649'  },
    'Sparatn': { '$25K': '$399', '$50K': '$699', '$100K': '$1,199'},
  }

  const sizeOptions = ['$25K', '$50K', '$100K']
  const tabOptions = ['Instant', '1-Step', '2-Step', 'Sparatn']

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="section-heading">
          Become an <span className="highlight">Master Trader</span>
        </h2>
        <p className="section-subtitle">
          Choose the evaluation based on your preference to become an Empire Trader.
        </p>

        {/* Top Row */}
        <div className="top-row">
          {/* Left Side - transparent layout */}
          <div className="left-side">
            {/* Trading Path - NO box styling, transparent */}
            <div className="trading-path-row">
              <div className="path-label">Choose your Trading Path</div>
              <div className="tabs-container">
                {tabOptions.map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Size - NO box styling, transparent */}
            <div className="account-size-row">
              <div className="size-label">Select Account Size</div>
              <div className="size-buttons">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${activeSize === size ? 'active' : ''}`}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - pricing card */}
          <div className="right-panel">
            <div className="popular-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00C9A7" style={{ marginRight: '6px' }}>
                <path d="M12 2C9 7 6 8 6 13a6 6 0 0 0 12 0c0-5-3-6-6-11zm0 15a2 2 0 0 1-2-2c0-2 2-3 2-5 0 2 2 3 2 5a2 2 0 0 1-2 2z"/>
              </svg>
              MOST POPULAR
            </div>
            <div className="start-label">START NOW AT ONLY</div>
            <div className="price-display">{prices[activeTab][activeSize]}</div>
            <button className="get-funded-btn">Get Funded</button>
          </div>
        </div>

        {/* Bottom Row - 2 Info Cards with individual stat boxes */}
        <div className="bottom-cards">
          <div className="info-card">
            <h4 className="card-title">1. VERIFICATION</h4>
            <p className="card-desc">
              Choose a simulated account size and try to reach the minimum simulated gains target...
            </p>
            <div className="stats-list">
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  Max Daily Drawdown
                </span>
                <span className="value">2%</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  Max Overall Drawdown
                </span>
                <span className="value">10%</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Minimum Profitable Days
                </span>
                <span className="value">3 Days</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                  Sim Trading Leverage
                </span>
                <span className="value">30:1</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h4 className="card-title">2. LIVE SIMULATED TRADER</h4>
            <p className="card-desc">
              You can now start trading on a simulated basis in the EmpireTrading program...
            </p>
            <div className="stats-list">
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Payout Share
                </span>
                <span className="value">
                  <span className="payout-badge">90%</span>
                </span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  Max Daily Drawdown
                </span>
                <span className="value">4%</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  Max Overall Drawdown
                </span>
                <span className="value">6%</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Payout Frequency
                </span>
                <span className="value">14 days</span>
              </div>
              <div className="stat-box">
                <span className="label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="2" width="16" height="16">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Trading Period
                </span>
                <span className="value">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bottom-banner">
          Get Paid in 48 Hours or Get $2000!
        </div>
      </div>
    </section>
  )
}

export default PricingSection
