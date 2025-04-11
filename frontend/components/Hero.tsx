import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <h1 className="hero-heading">Discover Your Dream Vacation</h1>
        <div className="search-bar">
          <input type="text" placeholder="Destination" />
          <input type="text" placeholder="Date Range" />
          <select>
            <option value="flight">Flight</option>
            <option value="hotel">Hotel</option>
            <option value="package">Package</option>
          </select>
          <button>Search</button>
        </div>
        <div className="promo-banner">
          <p>Get 20% Off Summer Deals!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
