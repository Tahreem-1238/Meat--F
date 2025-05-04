import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ButcherBooking.css';

const butchers = [
  { name: 'Ali Butcher', experience: '5 years', rating: 4.8, image: 'https://i.pinimg.com/736x/b7/8e/dd/b78edd2b4046c535a1bc2a23aba7fab2.jpg' },
  { name: 'Rehman Qasai', experience: '3 years', rating: 4.6, image: 'https://i.pinimg.com/736x/bc/11/c9/bc11c9f5122fe73585c5983d191b8c64.jpg' },
  { name: 'Usman Bhai', experience: '7 years', rating: 4.9, image: 'https://i.pinimg.com/736x/bc/2a/95/bc2a95c271436a0c56d9d36c8d24472a.jpg' },
  { name: 'Abdullah', experience: '6 years', rating: 4.8, image: 'https://i.pinimg.com/736x/b7/8e/dd/b78edd2b4046c535a1bc2a23aba7fab2.jpg' },
  { name: 'Ahmed', experience: '3 years', rating: 4.8, image: 'https://i.pinimg.com/736x/b7/8e/dd/b78edd2b4046c535a1bc2a23aba7fab2.jpg' },
];

export default function ButcherBooking() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  const displayedButchers = butchers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < butchers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBooking = (butcher) => {
    navigate('/book-butcher', { state: { butcher } });
  };

  return (
    <div className="butcher-booking-container">
      <h2>Available Butchers</h2>
      <div className="butcher-list">
        {displayedButchers.map((butcher, index) => (
          <div className="butcher-card" key={index}>
            <div className="butcher-image">
              <img src={butcher.image} alt={butcher.name} />
            </div>
            <h3>{butcher.name}</h3>
            <p><strong>Experience:</strong> {butcher.experience}</p>
            <p><strong>Rating:</strong> ⭐ {butcher.rating}</p>
            <button className="book-btn" onClick={() => handleBooking(butcher)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={handlePrevPage} disabled={currentPage === 0} className="pagination-btn">← Previous</button>
        <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= butchers.length} className="pagination-btn">Next →</button>
      </div>
    </div>
  );
}
