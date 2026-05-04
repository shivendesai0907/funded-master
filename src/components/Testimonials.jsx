import './Testimonials.css'

const reviews = [
  {
    title: 'Great!',
    text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout."
  },
  {
    title: 'Great and fast answers to my questions',
    text: "Great and fast answers to my questions. Doberman was fantastic and professional, answered my questions and the response time was like 2 minutes even though they say 20."
  },
  {
    title: 'Great Customer Service',
    text: "Best company no problem so far. Hope to get a payout soon"
  },
  {
    title: 'Great Customer Service',
    text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout."
  },
  {
    title: 'Great Customer Service',
    text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout."
  },
  {
    title: 'Great Customer Service',
    text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account and am not sure about their restrictions and payout."
  },
  {
    title: 'Best company no problem so far.',
    text: "Best company no problem so far. Hope to get a payout soon"
  },
  {
    title: 'Support team is best i ever seen and...',
    text: "Support team is best i ever seen and priyanshu is genuine guide"
  },
  {
    title: 'Great Customer Service',
    text: "Best company no problem so far. Hope to get a payout soon"
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <p className="testimonials-label">TESTIMONIALS</p>
      <h2 className="testimonials-heading">
        <span className="teal">Trust Us - </span>
        You're In Safe Hands
      </h2>

      <div className="trustpilot-row">
        <span className="excellent-text">Excellent</span>
        <div className="stars-row">
          {[1,2,3,4].map(i => (
            <div key={i} className="star-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          ))}
          <div className="star-box star-half">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="rating-text">
        Rated 4.8 / 5 based on <span className="underline">4,258 reviews</span> on
      </p>

      <div className="masonry-scroll-wrapper">
        <div className="masonry-grid">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="card-stars">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#00C9A7">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="reviewer-line">
                <span className="reviewer-name">Karan Gupta</span>
                <span className="reviewer-time">, 16 hours ago</span>
              </p>
              <h4 className="card-title">{review.title}</h4>
              <p className="card-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials
