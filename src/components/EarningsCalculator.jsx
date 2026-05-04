import { useState } from 'react'
import './EarningsCalculator.css'

function EarningsCalculator() {
  const [accountSize, setAccountSize] = useState(100000)
  const [profitRate, setProfitRate] = useState(18)

  const fillPercent1 = ((accountSize - 10000) / (200000 - 10000)) * 100
  const fillPercent2 = ((profitRate - 1) / (20 - 1)) * 100
  const profit = Math.round(accountSize * (profitRate / 100) * 0.95)
  const formatted = profit.toLocaleString()

  const accountOptions = [10000, 25000, 50000, 100000, 200000]

  return (
    <section id="calculator" className="earnings-section">
      <div className="bg-glow"></div>

      <h2 className="earnings-heading">
        How much can you <span className="highlight">Earn with Us?</span>
      </h2>
      <p className="earnings-subtitle">
        Discover the potential to earn your desired income through trading without risking your own capital:
      </p>

      <div className="earnings-layout">
        {/* Left Side - Sliders */}
        <div className="sliders-container">
          {/* Account Size Slider */}
          <div className="slider-group">
            <label className="slider-label">Account Size</label>
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value))}
              className="slider"
              style={{
                background: `linear-gradient(to right, #00C9A7 0%, #00C9A7 ${fillPercent1}%, rgba(255,255,255,0.15) ${fillPercent1}%, rgba(255,255,255,0.15) 100%)`
              }}
            />
            <div className="slider-scale">
              {accountOptions.map((amount) => (
                <span
                  key={amount}
                  className={`scale-label ${accountSize === amount ? 'active' : ''}`}
                >
                  ${(amount / 1000).toFixed(amount >= 100000 ? 0 : 0)}K
                </span>
              ))}
            </div>
          </div>

          {/* Profit Rate Slider */}
          <div className="slider-group">
            <label className="slider-label">Monthly Profit Rate</label>
            <div className="bubble-wrapper">
              <div
                className="bubble"
                style={{ left: `${fillPercent2}%` }}
              >
                {profitRate}%
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={profitRate}
              onChange={(e) => setProfitRate(Number(e.target.value))}
              className="slider"
              style={{
                background: `linear-gradient(to right, #00C9A7 0%, #00C9A7 ${fillPercent2}%, rgba(255,255,255,0.15) ${fillPercent2}%, rgba(255,255,255,0.15) 100%)`
              }}
            />
          </div>
        </div>

        {/* Right Side - Result */}
        <div className="result-card">
          <p className="result-text">
            Your total profit with 95% Profit Split.
          </p>
          <div className="profit-amount">
            ${formatted}
            <span className="per-month">/month</span>
          </div>
          <button className="get-funded-btn">Get Funded</button>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, #060907)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
    </section>
  )
}

export default EarningsCalculator