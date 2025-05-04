import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookButcherForm.css';

export default function BookButcherForm() {
  const location = useLocation();
  const butcherName = location.state?.butcherName || "Selected Butcher";

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    animalType: '',
    serviceType: '',
    date: '',
    time: '',
    instructions: ''
  });

  const [bookingId, setBookingId] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 Mock availability check:
    const isAvailable = true; // Replace with backend logic

    if (!isAvailable) {
      alert("Sorry, butcher not available on this date/time.");
      return;
    }

    // 🎯 Generate unique booking ID
    const newBookingId = `BK${Date.now()}`;
    setBookingId(newBookingId);

    // 💾 Save booking locally
    const fullBooking = { ...formData, bookingId: newBookingId, butcher: butcherName };
    localStorage.setItem('butcherBooking', JSON.stringify(fullBooking));

    // ✅ Show confirmation
    setIsBooked(true);
  };

  return (
    <div className="book-butcher-form-container">
      <h2>Book {butcherName}</h2>

      {isBooked ? (
        <div className="booking-success">
          🎉 Booking Confirmed! <br />
          Your Booking ID: <strong>{bookingId}</strong>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="book-butcher-form">
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
          <input type="tel" name="contact" placeholder="Contact Number" required onChange={handleChange} />

          <select name="animalType" required onChange={handleChange}>
            <option value="">Select Animal Type</option>
            <option value="goat">Goat</option>
            <option value="cow">Cow</option>
            <option value="camel">Camel</option>
          </select>

          <select name="serviceType" required onChange={handleChange}>
            <option value="">Select Service Type</option>
            <option value="qurbani">Qurbani</option>
            <option value="cutting">Cutting</option>
            <option value="delivery">Delivery</option>
          </select>

          <input type="date" name="date" required onChange={handleChange} />
          <select name="time" required onChange={handleChange}>
            <option value="">Select Time Slot</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>

          <textarea name="instructions" placeholder="Any custom instructions?" onChange={handleChange} />

          <button type="submit">Confirm Booking</button>
        </form>
      )}
    </div>
  );
}
