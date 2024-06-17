import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [isOpen, setIsOpen] = useState({
    advancedSearch: false,
    realTimePriceCharts: false,
    hourPriceChange: false,
    userFriendlyInterface: false,
    currentPriceDisplay: false,
  });

  const handleToggle = (feature) => {
    setIsOpen((prevIsOpen) => ({ ...prevIsOpen, [feature]: !prevIsOpen[feature] }));
  };

  return (
    <div className='features'>
      <div className="features-intro">
        <h1>Exclusive Features</h1>
        <p>Welcome to our cutting-edge cryptocurrency price tracking website, 
        where you can stay updated with the latest trends and market movements 
        in the crypto world. Our platform offers a comprehensive suite of 
        features designed to provide you with accurate, real-time information 
        on your favorite cryptocurrencies. Whether you are a seasoned trader 
        or just starting your crypto journey, our website has everything you 
        need to make informed decisions.</p>
      </div>
      <div className="features-list">
        <div className="feature">
          <h2 onClick={() => handleToggle('advancedSearch')} style={{ cursor: 'pointer', marginBottom: 20  }}>
            {isOpen.advancedSearch ? <span>&#9660;</span> : <span>&#9658;</span>}
            Advanced Search Functionality
          </h2>
          {isOpen.advancedSearch && (
            <p>Easily find information on any cryptocurrency using our intuitive search bar. 
            Simply type the name or ticker symbol of the currency, and instantly access 
            detailed data and insights.</p>
          )}
        </div>
        <div className="feature">
          <h2 onClick={() => handleToggle('realTimePriceCharts')} style={{ cursor: 'pointer', marginBottom: 20 }}>
            {isOpen.realTimePriceCharts ? <span>&#9660;</span> : <span>&#9658;</span>}
            Real-Time Price Charts
          </h2>
          {isOpen.realTimePriceCharts && (
            <p>Our dynamic price charts offer an in-depth view of cryptocurrency 
            price movements. Track historical performance and analyze trends 
            with our user-friendly and interactive charts.</p>
          )}
        </div>
        <div className="feature">
          <h2 onClick={() => handleToggle('hourPriceChange')} style={{ cursor: 'pointer',marginBottom: 20 }}>
            {isOpen.hourPriceChange ? <span>&#9660;</span> : <span>&#9658;</span>}
            24-Hour Price Change
          </h2>
          {isOpen.hourPriceChange && (
            <p>Stay informed about the short-term performance of cryptocurrencies 
            with our 24-hour price change tracker. See which coins are gaining 
            momentum and which are experiencing declines.</p>
          )}
        </div>
        <div className="feature">
          <h2 onClick={() => handleToggle('userFriendlyInterface')} style={{ cursor: 'pointer',marginBottom: 20  }}>
            {isOpen.userFriendlyInterface ? <span>&#9660;</span> : <span>&#9658;</span>}
            User-Friendly Interface
          </h2>
          {isOpen.userFriendlyInterface && (
            <p>Navigate through our platform with ease, thanks to our clean and 
            intuitive design. Whether you are searching for a specific coin or 
            exploring market trends, our user-friendly interface makes your 
            experience seamless and enjoyable.</p>
          )}
        </div>
        <div className="feature">
          <h2 onClick={() => handleToggle('currentPriceDisplay')} style={{ cursor: 'pointer',marginBottom: 20  }}>
            {isOpen.currentPriceDisplay ? <span>&#9660;</span> : <span>&#9658;</span>}
            Current Price Display
          </h2>
          {isOpen.currentPriceDisplay && (
            <p>Get the latest market prices for all major cryptocurrencies. Our 
            platform updates prices in real-time, ensuring you have the most 
            accurate and up-to-date information at your fingertips.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;