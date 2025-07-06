import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      title: "Real-time Market Data",
      description: "Get live cryptocurrency prices and market data from over 100+ exchanges worldwide.",
      icon: "📊"
    },
    {
      title: "Portfolio Tracking",
      description: "Track your cryptocurrency investments with detailed analytics and performance metrics.",
      icon: "📈"
    },
    {
      title: "Price Alerts",
      description: "Set custom price alerts for your favorite cryptocurrencies and never miss important movements.",
      icon: "🔔"
    },
    {
      title: "News & Analysis",
      description: "Stay updated with the latest cryptocurrency news and expert market analysis.",
      icon: "📰"
    },
    {
      title: "Secure Trading",
      description: "Trade cryptocurrencies securely with our advanced security protocols and encryption.",
      icon: "🔒"
    },
    {
      title: "Mobile App",
      description: "Access your portfolio and trade on the go with our mobile-optimized platform.",
      icon: "📱"
    }
  ]

  return (
    <div className='features'>
      <div className='hero'>
        <h1>Platform Features</h1>
        <p>Discover the powerful tools and features that make CryptoPlace the ultimate cryptocurrency platform for traders and investors.</p>
      </div>
      
      <div className='features-grid'>
        {features.map((feature, index) => (
          <div key={index} className='feature-card'>
            <div className='feature-icon'>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='cta-section'>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who trust CryptoPlace for their cryptocurrency needs.</p>
        <button className='cta-button'>Sign Up Now</button>
      </div>
    </div>
  )
}

export default Features 