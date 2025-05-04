import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you use this
// import { Link } from 'react-router-dom'; // ⬅️ Add this at the top with other imports

import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading animate-text">Get in Touch</h2>
            <p className="contact-text">We’d love to hear from you! Fill out the form or connect with us on social media.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-textarea"
                ></textarea>
                <button type="submit" className="contact-button">Send Message</button>
            </form>

            <div className="go-to-review">
                <p>Want to leave a review?</p>
                <Link to="/review" className="review-link-button">Go to Review Page</Link>
            </div>

            <div className="social-icons">
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
            <div className="review-link">
  <p>Want to leave a review about our services?</p>
  <Link to="/review" className="leave-review-button">Leave a Review</Link>
</div>


            <footer className="footer">
                <p>© {new Date().getFullYear()} Meatify. All rights reserved.</p>
            </footer>
        </div>
    );
}
