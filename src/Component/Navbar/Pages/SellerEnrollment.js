import React, { useState, useEffect } from 'react';
import './SellerEnrollment.css';

export default function SellerEnrollment() {
  const [sellerName, setSellerName] = useState('');
  const [selection, setSelection] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.name) {
      setSellerName(userData.name);
    }
  }, []);

  const handleSelection = (value) => {
    setSelection(value);
  };

  return (
    <div className="seller-container">
      <h2 className="title">Hello {sellerName}, What would you like to sell?</h2>

      <div className="selection-boxes">
        <div
          className={`option-box ${selection === 'animal' ? 'selected' : ''}`}
          onClick={() => handleSelection('animal')}
        >
          🐄 Sell Animal
        </div>
        <div
          className={`option-box ${selection === 'meat' ? 'selected' : ''}`}
          onClick={() => handleSelection('meat')}
        >
          🍖 Sell Meat
        </div>
        <div
          className={`option-box ${selection === 'both' ? 'selected' : ''}`}
          onClick={() => handleSelection('both')}
        >
          🐄+🍖 Sell Both
        </div>
      </div>

      {selection === 'animal' || selection === 'both' ? (
        <div className="form-section">
          <h3>Animal Details</h3>
          <input type="text" placeholder="Animal Type" />
          <input type="text" placeholder="Animal Name" />
          <input type="text" placeholder="Breed" />
          <input type="number" placeholder="Age (in years)" />
          <input type="number" placeholder="Weight (kg)" />
          <input type="number" placeholder="Price per animal (PKR)" />
          <textarea placeholder="Description of the animal"></textarea>
          <input type="file" multiple accept="image/*" />
          <label>Availability Date:</label>
          <input type="date" />
        </div>
      ) : null}

      {selection === 'meat' || selection === 'both' ? (
        <div className="form-section">
          <h3>Meat Details</h3>
          <input type="text" placeholder="Type of Meat (e.g. Beef, Mutton)" />
          <input type="number" placeholder="Weight (kg)" />
          <input type="number" placeholder="Price per kg (PKR)" />
          <textarea placeholder="Description of the meat" />
          <input type="file" multiple accept="image/*" />
        </div>
      ) : null}

      {selection && (
        <button className="submit-btn">Submit Listing</button>
      )}
    </div>
  );
}
