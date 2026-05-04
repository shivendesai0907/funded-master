import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Empire Trading?',
      answer: 'To win the game, you need strong support and diligent preparation. Join For Traders Community.'
    },
    {
      question: 'Who can apply?',
      answer: 'Anyone can apply to become a funded trader. We welcome traders of all experience levels who are ready to prove their skills.'
    },
    {
      question: 'How does funding work?',
      answer: 'Pass our evaluation challenge and receive a funded account. Trade our capital and keep up to 95% of your profits.'
    },
    {
      question: 'Which markets can I trade?',
      answer: 'You can trade Forex, Indices, Commodities, Cryptocurrencies and more across 150+ instruments.'
    },
    {
      question: 'How do you help manage risk?',
      answer: 'We have clear drawdown limits and risk management rules to protect both traders and our capital.'
    },
    {
      question: 'Do you offer resources for new traders?',
      answer: 'Yes! We provide educational resources, trading tools and a supportive community to help you succeed.'
    },
    {
      question: 'How fast are payouts?',
      answer: 'Payouts are processed within 24-48 hours. We pride ourselves on being one of the fastest paying prop firms.'
    },
    {
      question: 'What trading platforms do you support?',
      answer: 'We support MetaTrader 4, MetaTrader 5 and other leading trading platforms.'
    },
  ]

  return (
    <section id="faqs" className="faq-section">
      <h2 className="faq-heading">
        Frequently Asked <span>Questions</span>
      </h2>
      <p className="faq-subtitle">
        I know... just like you many traders have these questions, so here are the answers!
      </p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="faq-header">
              <span className="faq-question">{faq.question}</span>
              <span className="faq-icon">{openIndex === i ? '×' : '+'}</span>
            </div>
            {openIndex === i && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
