import React, { useState } from 'react';
import './PriceEstimator.css';

export default function PriceEstimator() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleEstimate = (e) => {
    e.preventDefault();
    if (!image || !animalType || !serviceType) {
      alert("Please fill all required fields.");
      return;
    }

    const basePrices = {
      goat: [40000, 60000],
      cow: [90000, 150000],
      camel: [120000, 200000],
    };

    const [min, max] = basePrices[animalType] || [50000, 80000];

    let estimatedMin = min;
    let estimatedMax = max;

    if (serviceType === 'with') {
      estimatedMin += 3000;
      estimatedMax += 3000;
    }

    if (location) {
      estimatedMin += 2000;
      estimatedMax += 2000;
    }

    setEstimatedPrice({ min: estimatedMin, max: estimatedMax });
  };

  return (
    <div className="price-estimator-wrapper">
      <div className="image-section"></div>

      <div className="price-estimator-container">
        <h2>Animal Price Estimator</h2>
        <form onSubmit={handleEstimate} className="estimator-form">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>

          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            required
          >
            <option value="">Select Animal Type</option>
            <option value="goat">Goat</option>
            <option value="cow">Cow</option>
            <option value="camel">Camel</option>
          </select>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="serviceType"
                value="only"
                checked={serviceType === 'only'}
                onChange={(e) => setServiceType(e.target.value)}
                required
              />
              Only Animal
            </label>
            <label>
              <input
                type="radio"
                name="serviceType"
                value="with"
                checked={serviceType === 'with'}
                onChange={(e) => setServiceType(e.target.value)}
              />
              With Slaughtering
            </label>
          </div>

          <button type="submit">Get Estimate</button>
        </form>

        {estimatedPrice && (
          <div className="price-result">
            <h3>Total Estimated Price</h3>
            <p>
              Minimum: <strong>PKR {estimatedPrice.min.toLocaleString()}</strong>
            </p>
            <p>
              Maximum: <strong>PKR {estimatedPrice.max.toLocaleString()}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
