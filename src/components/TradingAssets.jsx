import iconChallenge from '../assets/icon-challenge.png'
import iconLightning from '../assets/icon-lightning.png'
import iconNews from '../assets/icon-news.png'
import iconTarget from '../assets/icon-target.png'
import iconProfit from '../assets/icon-profit.png'
import './TradingAssets.css'

function TradingAssets() {
  return (
    <section id="programs" className="trading-assets">
      <div className="inner-wrapper">
        <h2 className="section-heading">
          Multiple Trading <span className="highlight">Assets</span>
        </h2>
        <p className="section-subheading">Trade in the following markets:</p>

        <div className="cards-container">
          {/* Row 1 - 3 cards */}
          <div className="row-1-wrapper">
            {/* Card 1 - 100% Profit Splits with profit icon */}
             <div className="card-wrapper">
               <div className="icon-wrapper-above">
                 <img src={iconProfit} alt="Up to 100% Profit Splits" className="icon-img" />
               </div>
               <div className="card type-b">
                 <h3 className="card-title">Up to 100% Profit Splits</h3>
                 <p className="card-desc">
                   Keep every dollar you earn - Our funding model lets you keep up to 100% of your profits.
                 </p>
               </div>
             </div>

            {/* Card 2 - 1-Step Challenge with floating icon */}
            <div className="card-wrapper">
              <div className="icon-wrapper-above">
                <img src={iconChallenge} alt="1-Step Challenge" className="icon-img" />
              </div>
              <div className="card type-b">
                <h3 className="card-title">1-Step Challenge</h3>
                <p className="card-desc">
                  One clear target, one easy step - prove your skills and unlock funding with no extra steps.
                </p>
              </div>
            </div>

            {/* Card 3 - Lightning Fast Payouts with floating icon */}
            <div className="card-wrapper">
              <div className="icon-wrapper-above">
                <img src={iconLightning} alt="Lightning Fast Payouts" className="icon-img" />
              </div>
              <div className="card type-b">
                <h3 className="card-title">Lightning Fast Payouts</h3>
                <p className="card-desc">
                  Trade hard today, spend tomorrow - experience truly lightning fast payouts.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - 2 centered cards with floating icons */}
          <div className="row-2-wrapper">
            {/* Card 4 - Trade News Freely */}
            <div className="card-wrapper">
              <div className="icon-wrapper-above">
                <img src={iconNews} alt="Trade News Freely" className="icon-img" />
              </div>
              <div className="card type-b card-half">
                <h3 className="card-title">Trade News Freely</h3>
                <p className="card-desc">
                  Earn your share of the profits and receive your payout within 24 hrs.
                </p>
              </div>
            </div>

            {/* Card 5 - 6% Profit Target */}
            <div className="card-wrapper">
              <div className="icon-wrapper-above">
                <img src={iconTarget} alt="6% Profit Target" className="icon-img" />
              </div>
              <div className="card type-b card-half">
                <h3 className="card-title">6% Profit Target</h3>
                <p className="card-desc">
                  Hit your mark effortlessly with our ultra-low 6% profit target. Less stress, more trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingAssets
