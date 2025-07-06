import React from 'react'
import './Pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      features: [
        "Real-time market data",
        "Basic portfolio tracking",
        "Price alerts (5 coins)",
        "Mobile app access",
        "Community support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      features: [
        "Everything in Basic",
        "Advanced portfolio analytics",
        "Unlimited price alerts",
        "Priority customer support",
        "Advanced trading tools",
        "API access",
        "Custom watchlists"
      ],
      popular: true,
      buttonText: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Institutional-grade data",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "24/7 phone support"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ]

  return (
    <div className='pricing'>
      <div className='hero'>
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan for your cryptocurrency trading and investment needs. Start free and upgrade as you grow.</p>
      </div>
      
      <div className='pricing-grid'>
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className='popular-badge'>Most Popular</div>}
            <div className='plan-header'>
              <h3>{plan.name}</h3>
              <div className='price'>
                <span className='amount'>{plan.price}</span>
                <span className='period'>/{plan.period}</span>
              </div>
            </div>
            
            <ul className='features-list'>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span className='checkmark'>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className='faq-section'>
        <h2>Frequently Asked Questions</h2>
        <div className='faq-grid'>
          <div className='faq-item'>
            <h4>Can I change my plan anytime?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
          </div>
          <div className='faq-item'>
            <h4>Is there a free trial?</h4>
            <p>Yes, all paid plans come with a 14-day free trial. No credit card required to start.</p>
          </div>
          <div className='faq-item'>
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
          </div>
          <div className='faq-item'>
            <h4>Can I cancel anytime?</h4>
            <p>Absolutely. You can cancel your subscription at any time with no cancellation fees.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing 