import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Registered:', formData);

        // Save to localStorage
        localStorage.setItem('userData', JSON.stringify(formData));

        // Redirect based on role
        if (formData.role === 'butcher') {
            navigate('/butcher-enroll');
        } else if (formData.role === 'seller') {
            navigate('/seller-enroll');  // ✅ new seller path
        } else {
            navigate('/home');
        }
    };

    return (
        <div className="register-container">
            <h1 className="welcome-heading">Welcome to Meatify</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- OPT in as --</option>
                    <option value="customer">Customer</option>
                    <option value="butcher">Butcher</option>
                    <option value="seller">Seller</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
