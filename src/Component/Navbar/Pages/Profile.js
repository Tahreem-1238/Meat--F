// src/components/Profile.js
import React from 'react';

const Profile = ({ profileData }) => {
  return (
    <div className="profile-container">
      <h1>Welcome, {profileData.name}!</h1>
      <p>{`You have successfully enrolled as a ${profileData.service}.`}</p>
      <p>Contact Info:</p>
      <ul>
        <li>Email: {profileData.email}</li>
        <li>Phone: {profileData.phone}</li>
      </ul>
      <p>We are excited to have you on board!</p>
    </div>
  );
};

export default Profile;
