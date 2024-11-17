import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
function Prediction() {
  const [formData, setFormData] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    feature7: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1); // State to store the scale of the form

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        features: [
          parseFloat(formData.feature1),
          parseFloat(formData.feature2),
          parseFloat(formData.feature3),
          parseFloat(formData.feature4),
          parseFloat(formData.feature5),
          parseFloat(formData.feature6),
          parseFloat(formData.feature7)
        ],
      });

      setPrediction(response.data.prediction);
    } catch (err) {
      console.error("Error response:", err.response);
      console.error("Error message:", err.message);
      setError(`Error: ${err.response ? err.response.data.message : err.message}`);
    }
  };

  useEffect(() => {
    // Function to detect scroll event
    const handleScroll = () => {
      // Calculate the scroll position and scale the form accordingly
      const scrollY = window.scrollY;
      const newScale = Math.max(1 - scrollY / 1000, 0.75); // Min scale of 0.75
      setScale(newScale); // Update scale state
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="prediction-container" style={{ transform: `scale(${scale})` }}>
      <h1 className="header">Crop Prediction</h1>

      <form className="prediction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>N:</label>
          <input
            type="number"
            name="feature1"
            value={formData.feature1}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>P:</label>
          <input
            type="number"
            name="feature2"
            value={formData.feature2}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>K:</label>
          <input
            type="number"
            name="feature3"
            value={formData.feature3}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Temperature:</label>
          <input
            type="number"
            name="feature4"
            value={formData.feature4}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Humidity:</label>
          <input
            type="number"
            name="feature5"
            value={formData.feature5}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>pH:</label>
          <input
            type="number"
            name="feature6"
            value={formData.feature6}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Rainfall:</label>
          <input
            type="number"
            name="feature7"
            value={formData.feature7}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Predict</button>
      </form>

      {prediction && <h2 className="prediction-result">Prediction: {prediction}</h2>}
      {error && <h3 className="error-message">{error}</h3>}
    </div>
  );
}

export default Prediction;
