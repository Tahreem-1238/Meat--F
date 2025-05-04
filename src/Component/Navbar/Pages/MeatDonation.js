import React, { useState } from 'react';
import './MeatDonation.css';

export default function MeatDonation() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    meatType: '',
    quantity: '',
    method: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      contact: '',
      address: '',
      meatType: '',
      quantity: '',
      method: '',
    });
  };

  return (
    <div className="meat-donation-container">
      <h2>Meat Donation</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <select
          name="meatType"
          value={formData.meatType}
          onChange={handleChange}
          required
        >
          <option value="">Select Meat Type</option>
          <option value="goat">Goat</option>
          <option value="cow">Cow</option>
          <option value="camel">Camel</option>
          <option value="chicken">Chicken</option>
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity (kg)"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <select
          name="method"
          value={formData.method}
          onChange={handleChange}
          required
        >
          <option value="">Delivery Method</option>
          <option value="pickup">We will pick it up</option>
          <option value="dropoff">I will drop it off</option>
        </select>

        <button type="submit">Donate Now</button>
      </form>

      {submitted && (
        <p className="confirmation-message">
          🎉 Thank you for your generous meat donation! We will contact you soon.
        </p>
      )}
    </div>
  );
}
