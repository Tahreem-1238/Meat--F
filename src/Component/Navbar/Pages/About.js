import React from 'react';
import './About.css';  
import img2 from '../../../About/image.png'; 

export default function About() {
    return (
        <section id="about" className="about-container">
            <div className="about-text-container">
                <h1 className="about-heading">About Meatify</h1>
                <p className="about-text">
                    Meatify is a one-stop platform designed to simplify the process of booking premium butchers for your qurbani. 
                    Our platform connects you with experienced professionals who ensure the highest standards of meat processing. 
                    With a focus on quality and convenience, Meatify makes it easy to book butchers, estimate prices, and even donate meat to those in need. 
                    Start your qurbani with us, and experience hassle-free services every time.
                </p>
            </div>

            {/* Bottom Section - Image */}
            <div className="about-image-container">
                <img src={img2} alt="Rated" className="about-image" />
            </div>
        </section>
    );
}
