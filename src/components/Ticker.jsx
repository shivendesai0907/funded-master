import frameImg from '../assets/frame.png'
import './Ticker.css'
import React from 'react'

const data = [
  { type: 'payout', amount: '$4,659.58', location: 'Toronto, Canada' },
  { type: 'stat', number: '5,863', label: 'Traders' },
  { type: 'payout', amount: '$2,119.48', location: 'Sydney, Australia' },
  { type: 'stat', number: '180+', label: 'Countries' },
  { type: 'payout', amount: '$8,273.75', location: 'Chennai, India' },
  { type: 'stat', number: '$2.7M', label: 'Payouts' },
  { type: 'payout', amount: '$4,659.58', location: 'Virginia, USA' },
  { type: 'stat', number: '5,863', label: 'Traders' },
]

function Ticker() {
  // Duplicate the list twice for seamless looping
  const tickerItems = [...data, ...data, ...data]

  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === 'payout' ? (
              <div className="ticker-item payout-item">
                <img src={frameImg} alt="certificate" className="certificate-icon" />
                <span className="amount">{item.amount}</span>
                <span className="location">{item.location}</span>
              </div>
            ) : (
              <div className="ticker-item stat-item">
                <span className="number">{item.number}</span>
                <span className="label">{item.label}</span>
              </div>
            )}
            {index < tickerItems.length - 1 && <div className="divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Ticker
