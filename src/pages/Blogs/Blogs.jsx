import React from 'react'
import './Blogs.css'

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cryptocurrency: What to Expect in 2024",
      excerpt: "Explore the latest trends and predictions for the cryptocurrency market in 2024, including regulatory changes, technological advancements, and market dynamics.",
      author: "CryptoPlace Team",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "📈"
    },
    {
      id: 2,
      title: "How to Build a Diversified Crypto Portfolio",
      excerpt: "Learn the essential strategies for creating a well-balanced cryptocurrency portfolio that can weather market volatility and maximize returns.",
      author: "Sarah Johnson",
      date: "December 12, 2023",
      readTime: "7 min read",
      category: "Investment Guide",
      image: "💼"
    },
    {
      id: 3,
      title: "Understanding DeFi: The Revolution in Finance",
      excerpt: "Dive deep into the world of Decentralized Finance and discover how it's transforming traditional financial services and creating new opportunities.",
      author: "Mike Chen",
      date: "December 10, 2023",
      readTime: "8 min read",
      category: "DeFi",
      image: "🏦"
    },
    {
      id: 4,
      title: "Bitcoin vs Ethereum: A Comprehensive Comparison",
      excerpt: "Compare the two leading cryptocurrencies and understand their different use cases, technologies, and investment potential.",
      author: "Alex Rodriguez",
      date: "December 8, 2023",
      readTime: "6 min read",
      category: "Education",
      image: "⚖️"
    },
    {
      id: 5,
      title: "NFTs: Beyond Digital Art and Collectibles",
      excerpt: "Discover the expanding world of NFTs and how they're being used in gaming, real estate, identity verification, and more.",
      author: "Emma Wilson",
      date: "December 5, 2023",
      readTime: "9 min read",
      category: "NFTs",
      image: "🎨"
    },
    {
      id: 6,
      title: "Crypto Security: Best Practices for Protecting Your Assets",
      excerpt: "Essential security tips and best practices to keep your cryptocurrency investments safe from hackers and scams.",
      author: "David Kim",
      date: "December 3, 2023",
      readTime: "10 min read",
      category: "Security",
      image: "🔒"
    }
  ]

  const categories = ["All", "Market Analysis", "Investment Guide", "DeFi", "Education", "NFTs", "Security"]

  return (
    <div className='blogs'>
      <div className='hero'>
        <h1>CryptoPlace Blog</h1>
        <p>Stay informed with the latest insights, analysis, and educational content from the world of cryptocurrency and blockchain technology.</p>
      </div>
      
      <div className='blog-container'>
        <div className='blog-header'>
          <h2>Latest Articles</h2>
          <div className='categories'>
            {categories.map((category, index) => (
              <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className='blog-grid'>
          {blogPosts.map((post) => (
            <article key={post.id} className='blog-card'>
              <div className='blog-image'>
                <span className='emoji'>{post.image}</span>
              </div>
              <div className='blog-content'>
                <div className='blog-meta'>
                  <span className='category'>{post.category}</span>
                  <span className='read-time'>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className='blog-footer'>
                  <span className='author'>{post.author}</span>
                  <span className='date'>{post.date}</span>
                </div>
                <button className='read-more'>Read More</button>
              </div>
            </article>
          ))}
        </div>
        
        <div className='load-more'>
          <button className='load-more-btn'>Load More Articles</button>
        </div>
      </div>

      <div className='newsletter-section'>
        <div className='newsletter-content'>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter and get the latest crypto insights delivered to your inbox.</p>
          <form className='newsletter-form'>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Blogs 