import React, { useState } from 'react';
import axios from 'axios';

function App() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset error state before making request

    try {
      // Ensure that features are passed as an array
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        features: [
          parseFloat(formData.feature1),  // Ensure that the values are treated as numbers
          parseFloat(formData.feature2),
          parseFloat(formData.feature3),
          parseFloat(formData.feature4),
          parseFloat(formData.feature5),
          parseFloat(formData.feature6),
          parseFloat(formData.feature7)
        ],
      });

      // Set the prediction result to state
      setPrediction(response.data.prediction);
    } catch (err) {
      console.error("Error response:", err.response);
      console.error("Error message:", err.message);
      setError(`Error: ${err.response ? err.response.data.message : err.message}`);
    }
  };

  return (
    <div className="App">
      <h1>Crop Prediction</h1>
      
      {/* Prediction Form */}
      <form onSubmit={handleSubmit}>
        <label>
          Feature 1 (N):
          <input
            type="number"
            name="feature1"
            value={formData.feature1}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 2 (P):
          <input
            type="number"
            name="feature2"
            value={formData.feature2}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 3 (K):
          <input
            type="number"
            name="feature3"
            value={formData.feature3}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 4 (Temperature):
          <input
            type="number"
            name="feature4"
            value={formData.feature4}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 5 (Humidity):
          <input
            type="number"
            name="feature5"
            value={formData.feature5}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 6 (pH):
          <input
            type="number"
            name="feature6"
            value={formData.feature6}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Feature 7 (Rainfall):
          <input
            type="number"
            name="feature7"
            value={formData.feature7}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <button type="submit">Predict</button>
      </form>

      {/* Display the prediction result */}
      {prediction && <h2>Predicted Crop: {prediction}</h2>}
      
      {/* Display error message if any */}
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
    </div>
  );
}

export default App;
