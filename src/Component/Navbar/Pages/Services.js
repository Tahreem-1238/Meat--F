import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const services = [
    { value: 'butcher-booking', label: 'Butcher Booking', description: 'Book a professional butcher for Eid.' },
    { value: 'meat-donation', label: 'Meat Donation', description: 'Donate meat to the needy through our platform.' },
    { value: 'price-estimator', label: 'Price Estimator', description: 'Estimate animal prices based on market trends.' },
    { value: 'garbage-collector', label: 'Garbage Collector', description: 'Schedule garbage collection after sacrifice.' },
    // { value: 'online-payments', label: 'Online Payments', description: 'Secure and easy payment options available.' },
  ];

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedService(selected);
    if (selected) {
      navigate(`/${selected}`);
    }
  };

  return (
    <section id="services" className="services-container">
      <div className="services-description">
        <h2 className="services-heading">Welcome to Meatify Services</h2>
        <p className="services-text">
          Meatify is here to simplify your Eid and meat-related needs with a range of digital services. Whether it’s
          booking a butcher, donating meat, estimating prices, or scheduling waste collection – we’ve got it all covered!
        </p>
      </div>

      <div className="services-search">
        <h3>Select a Service</h3>
        <select onChange={handleChange} value={selectedService} className="services-select">
          <option value="">-- Choose a service --</option>
          {services.map(service => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
