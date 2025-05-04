import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import img1 from '../../../Home/image.png';

export default function Home() {
    const navigate = useNavigate();

    const handleExploreServices = () => {
        navigate('/services');
    };

    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1 className="home-heading"> Join Meatify</h1>
                <p className="home-text">
            
                    
                    Book premium butchers for your Qurbani — done right, on time, and professionally.
                </p>
                <p className="home-cta"> Your Qurbani, our responsibility. 100% satisfaction guaranteed</p>
                {/* Explore Services Button */}
                <button onClick={handleExploreServices} className="home-btn">
                    Explore Services
                </button>
            </div>

            <div className="image-container">
                <img src={img1} alt="Qurbani Butchers" className="home-image" />
            </div>
        </div>
    );
}
