import './TopTraders.css'

const traders = [
  { name: 'John Bartlett', country: 'Poland', amount: '$3,423.39', time: '1 Hours', active: false },
  { name: 'Thomas Vargas', country: 'Austria', amount: '$9,423.39', time: '4 Hours', active: true },
  { name: 'James Colon', country: 'Norway', amount: '$14,291.76', time: '8 Hours', active: true },
  { name: 'Joseph Hurst', country: 'Poland', amount: '$1,117.97', time: '6 Hours', active: false, ethIcon: true },
  { name: 'Richard Miles', country: 'Iraq', amount: '$6,142.12', time: '20 Hours', active: false },
  { name: 'Sarah Connor', country: 'Germany', amount: '$4,890.50', time: '3 Hours', active: false },
  { name: 'Mike Johnson', country: 'USA', amount: '$11,234.00', time: '5 Hours', active: true },
]

function TopTraders() {
  const duplicatedTraders = [...traders, ...traders]

  return (
    <section id="top-traders" className="top-traders-section">
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '120px',
        background: 'linear-gradient(to top, transparent, #060907)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
      <div className="top-traders-inner">
        <div className="traders-left">
          <h2 className="traders-heading">
            <span className="heading-white">Rewarding Our</span>
            <br />
            <span className="heading-white">Best Traders</span>
          </h2>
          <p className="traders-subtitle">
            Choose the evaluation based on your preference to become an Master Trader.
          </p>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-value">$2.7M+</div>
              <div className="stat-label">Total Payouts</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$5K+</div>
              <div className="stat-label">Total Traders</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5hrs</div>
              <div className="stat-label">Avg.Payout time</div>
            </div>
          </div>
        </div>

        <div className="traders-right">
          <div className="traders-scroll">
            {duplicatedTraders.map((trader, index) => (
              <div className={`trader-card ${trader.active ? 'active' : ''}`} key={index}>
                <div className={`avatar-circle ${trader.ethIcon ? 'avatar-eth' : ''} ${trader.active ? 'avatar-active' : ''}`}>
                  {trader.ethIcon ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2L5 12.5l7 4 7-4L12 2z" opacity="0.8"/>
                      <path d="M5 12.5L12 22l7-9.5-7 4-7-4z" opacity="0.6"/>
                    </svg>
                  ) : 'T'}
                </div>
                <div className="trader-info">
                  <div className="trader-name">{trader.name}</div>
                  <div className="trader-country">{trader.country}</div>
                </div>
                <div className="trader-right">
                  <div className="trader-amount">{trader.amount}</div>
                  <div className={`time-badge ${trader.active ? 'active' : 'inactive'}`}>
                    {trader.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopTraders