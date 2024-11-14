// src/pages/Home.js
import React from 'react';
import '../Home.css';  // Make sure to import the CSS

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Background Gradient Animation */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="home-title">Welcome to the Crop Recommendation System</h1>
          <p className="home-description">
            Get personalized crop recommendations based on your environmental conditions.
          </p>
          <p className="home-instructions">
            Navigate to Prediction to get started with crop recommendations.
          </p>
          <button className="home-button">Start Prediction</button>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="features">
        <div className="feature">
          <div className="icon">
            <i className="fas fa-seedling"></i>
          </div>
          <p>Personalized Crop Suggestions</p>
        </div>
        <div className="feature">
          <div className="icon">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <p>Based on Environmental Data</p>
        </div>
        <div className="feature">
          <div className="icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <p>Track Your Progress</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards">
        <div className="card">
          <h3>Start Your Journey</h3>
          <p>Begin with a simple step-by-step guide on how to get the best crop suggestions.</p>
        </div>
        <div className="card">
          <h3>Analyze Environmental Factors</h3>
          <p>Understand how different environmental factors impact your crop growth.</p>
        </div>
        <div className="card">
          <h3>Grow with Confidence</h3>
          <p>Track your crop progress and make informed decisions along the way.</p>
        </div>
      </div>

      {/* SVG Plant Animation */}
      <div className="svg-plant">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="plant-svg">
          <circle cx="100" cy="170" r="5" fill="#4CAF50">
            <animate attributeName="r" from="5" to="15" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M100,170 C90,150 90,130 100,110 C110,130 110,150 100,170" stroke="#4CAF50" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dashoffset" from="0" to="50" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
