import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerEnrollment.css';

const SellerEnrollment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: you can navigate after a delay if needed
    // setTimeout(() => {
    //   navigate('/profile', { state: { name, email, phone, profilePic } });
    // }, 2000);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <>
          <h2>Seller Enrollment</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />

            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />

            <label>Phone Number:</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />

            <label>Upload Profile Picture:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleProfilePicChange} 
              required 
            />
            {profilePic && (
              <div className="profile-pic-preview">
                <img src={profilePic} alt="Preview" width="100" height="100" />
              </div>
            )}

            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div className="welcome-message">
          <h2>🎉 Welcome on board, <span>{name}</span>!</h2>
          <p>Thank you for joining us as a seller. We're excited to have you on board!</p>
        </div>
      )}
    </div>
  );
};

export default SellerEnrollment;
