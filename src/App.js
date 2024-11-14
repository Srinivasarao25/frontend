// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing pages
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import StatisticsPage from './pages/StatisticsPage';
import CropsPage from './pages/CropsPage';

// Importing components
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/crops" element={<CropsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
