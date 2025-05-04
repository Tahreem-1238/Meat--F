import React, { useState, useEffect } from 'react';
import './ButcherEnrollment.css';

export default function ButcherEnrollment() {
    const [formData, setFormData] = useState({
        fullName: '',
        contact: '',
        city: '',
        experience: '',
        about: '',
        services: '',
        profilePic: null,
        rating: '',
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setFormData((prev) => ({
                ...prev,
                fullName: userData.name || '',
                contact: userData.email || '',
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Butcher Enrollment Data:', formData);
        localStorage.setItem('butcherEnrollment', JSON.stringify(formData));
        setSubmitted(true);
    };

    return (
        <div className="enrollment-container">
            <h2 className="enrollment-heading">Butcher Enrollment Form</h2>
            <form className="enrollment-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />

                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact No."
                    required
                />

                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                />

                <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years of Experience"
                    required
                />

                <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    placeholder="Write a few lines about yourself"
                    rows="3"
                    required
                />

                <input
                    type="text"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="e.g., Qurbani, Cutting, Delivery"
                    required
                />

                <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />

                <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select Rating --</option>
                    <option value="1">1 - Beginner</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Expert</option>
                </select>

                <button type="submit">Submit Enrollment</button>
            </form>

            {submitted && (
                <div className="success-message">
                    🎉 Congratulations! You've successfully submitted your Butcher Enrollment.
                </div>
            )}
        </div>
    );
}
