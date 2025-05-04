import React, { useState } from 'react';
import './GarbageCollector.css';

export default function GarbageCollector() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    date: '',
    time: '',
    type: '',
  });

  const [status, setStatus] = useState('Request Received');
  const [notification, setNotification] = useState('');
  const [requests, setRequests] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.phone || !formData.date || !formData.time || !formData.type) {
      alert('Please fill all fields');
      return;
    }

    setRequests((prev) => [...prev, { ...formData, status }]);
    setNotification('Collector is nearby!');
    setTimeout(() => {
      setStatus('On the Way');
      setNotification('Collector is on the way');
    }, 2000);
    setTimeout(() => {
      setStatus('Completed');
      setNotification('Pickup completed successfully!');
    }, 4000);

    // Reset form
    setFormData({
      name: '',
      address: '',
      phone: '',
      date: '',
      time: '',
      type: '',
    });
  };

  return (
    <div className="garbage-wrapper">
      <h2>Garbage Collection Request</h2>
      <form className="garbage-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />

        <select name="time" value={formData.time} onChange={handleChange}>
          <option value="">Select Pickup Time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <div className="type-buttons">
          {['Animal waste', 'Packaging', 'Mixed'].map((type) => (
            <button
              type="button"
              key={type}
              className={formData.type === type ? 'selected' : ''}
              onClick={() => handleTypeSelect(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <button type="submit">Submit Request</button>
      </form>

      {notification && <div className="notification">{notification}</div>}
      <div className="status">Current Status: <strong>{status}</strong></div>

      <h3>Admin View - All Requests</h3>
      <ul className="admin-list">
        {requests.map((req, idx) => (
          <li key={idx}>
            <p><strong>{req.name}</strong> - {req.type} - {req.time} on {req.date}</p>
            <p>Status: {req.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
