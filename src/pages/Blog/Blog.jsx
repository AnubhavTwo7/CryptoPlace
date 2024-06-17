import React from 'react';
import Blogpost from './Blogpost';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Importance of Real-Time Data in Cryptocurrency Trading', 
      summary: 'In the fast-paced world of cryptocurrency trading, having access to real-time data is crucial for making informed decisions.',
      fullText: "Our platform provides up-to-the-minute prices, allowing traders to react swiftly to market changes. Real-time data helps in identifying trends, spotting opportunities, and minimizing risks. With our comprehensive charts and live updates, you can track your favorite cryptocurrencies and stay ahead of the curve. Whether you're day trading or holding for the long term, our real-time data ensures you have the most accurate information at your fingertips."
    },
    {
      title: 'How Market Capitalization Can Guide Your Crypto Investments', 
      summary: 'Market capitalization, or market cap, is a key metric that can help investors understand the value and stability of a cryptocurrency.',
      fullText: 'It is calculated by multiplying the current price by the total supply of coins in circulation. High market cap cryptocurrencies, like Bitcoin and Ethereum, are often considered more stable and less risky. Conversely, lower market cap coins might offer higher growth potential but come with increased volatility. Our platform provides detailed market cap data for a wide range of cryptocurrencies, helping you make more informed investment decisions based on market size and potential growth.'
    },
    {
      title: 'Understanding the 24-Hour Price Change and Its Impact on Trading Strategies', 
      summary: "The 24-hour price change is a vital indicator of a cryptocurrency's short-term performance.",
      fullText: "By tracking how a coin's price fluctuates within a single day, traders can gain insights into market sentiment and volatility. This metric is particularly useful for day traders who rely on quick price movements to generate profits. Our website offers a clear view of the 24-hour price change for all major cryptocurrencies, enabling you to identify trends and adjust your trading strategies accordingly. Stay informed and agile with our real-time updates and make the most of every trading opportunity."
    }
  ];

  return (
    <div className='blog'>
      <div className="blog-intro">
        <h1>Our Latest Blog Posts</h1>
        <p>Read our thoughts and insights on the latest trends in crypto.</p>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <Blogpost 
            key={index} 
            title={post.title} 
            summary={post.summary} 
            fullText={post.fullText} 
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
