import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable navigation
import './Marketplace.css';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const categoryData = {
      beef: {
        images: [
          { id: 1, src: 'https://i.pinimg.com/736x/a7/c3/59/a7c359f619d5a429ca0d5d3995e91ad5.jpg', alt: 'Beef Cuts', description: 'Fresh beef cuts.', pricePerKg: 'Rs. 1100', overallPrice: 'Rs. 2200 (2 Kg)',reviews: '4.5/5 based on 150 reviews' },
          { id: 2, src: 'https://i.pinimg.com/736x/d7/94/49/d7944973c3906c7ff24a3b14ec837f51.jpg', alt: 'Beef Steak', description: 'Premium beef steak.', pricePerKg: 'Rs. 1500', overallPrice: 'Rs. 3000 (2 Kg)', reviews: '4.7/5 based on 200 reviews'},
        ]
      },
      mutton: {
        images: [
          { id: 1, src: 'https://i.pinimg.com/736x/cb/13/22/cb13225916277d4b9668ea14c383800b.jpg', alt: 'Mutton Cuts', description: 'Delicious mutton cuts.' },
          { id: 2, src: 'https://i.pinimg.com/736x/ec/fb/02/ecfb029f7b87fa9baa3cdc01c16a0130.jpg', alt: 'Mutton Shanks', description: 'Tasty mutton shanks.' },
          { id: 3, src: 'https://i.pinimg.com/736x/15/6d/ff/156dff398dceb174f13b9ceca99c2449.jpg', alt: 'Mutton Cuts', description: 'Juicy mutton cuts.' },
        ]
      },
      frozen_meat: {
        images: [
          { id: 1, src: 'https://i.pinimg.com/736x/82/48/25/82482529301cbfede7c53dcd891a8429.jpg', alt: 'Frozen Meat Pack', description: 'Frozen meat pack.' },
          { id: 2, src: 'https://i.pinimg.com/736x/c7/91/b0/c791b07f1b808ee348f4524978b74b71.jpg', alt: 'Frozen Chicken', description: 'Frozen chicken cuts.' },
          { id: 3, src: 'https://i.pinimg.com/736x/ba/ad/9a/baad9a66335f1ee65478a15296a3e776.jpg', alt: 'Frozen Chicken', description: 'Frozen chicken breast.' },
        ]
      },
      kabab: {
        images: [
          { id: 1, src: 'https://i.pinimg.com/736x/01/e2/0a/01e20a8b56501a088483a45f05e098c2.jpg', alt: 'Kabab Plate', description: 'Delicious kabab plate.' },
          { id: 2, src: 'https://i.pinimg.com/736x/a5/a1/d4/a5a1d4ca9d1d7870d16ff9851b915c8b.jpg', alt: 'Kabab Skewers', description: 'Juicy kabab skewers.' },
          { id: 3, src: 'https://i.pinimg.com/736x/53/fb/90/53fb9044db4e9932496dd109128bf2df.jpg', alt: 'Kabab Skewers', description: 'Yummy kabab skewers.' },
          { id: 4, src: 'https://i.pinimg.com/736x/68/6a/5c/686a5c7ad81732609a349fe947430037.jpg', alt: 'Kabab Skewers', description: 'Grilled kabab skewers.' },
        ]
      },
      camel_meat: {
        images: [
          { id: 1, src: 'https://i.pinimg.com/736x/6d/22/03/6d2203862cc37eab98991e07324298e4.jpg', alt: 'Camel Meat Cuts', description: 'Tender camel meat cuts.' },
          { id: 2, src: 'https://i.pinimg.com/736x/0b/76/5f/0b765f09c960f461081fd8f0c97fbf6f.jpg', alt: 'Camel Meat Steaks', description: 'Delicious camel steaks.' },
        ]
      },
    };

    setItems(categoryData[category]?.images || []);
  };

  return (
    <div className="marketplace-container">
      <h2 className="marketplace-heading">Welcome to Our Meat Marketplace</h2>
      

      <div className="dropdown-container">
        <label htmlFor="category" className="dropdown-label">Choose a category:</label>
        <select
          id="category"
          className="category-dropdown"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select --</option>
          <option value="beef">Beef</option>
          <option value="mutton">Mutton</option>
          <option value="frozen_meat">Frozen Meat</option>
          <option value="kabab">Kabab</option>
          <option value="camel_meat">Camel Meat</option>
        </select>
      </div>

      {/* Show video for Beef category */}
      {selectedCategory === 'beef' && (
        <div className="video-container">
          <h3>Watch our exclusive video about beef</h3>
          <video className="marketplace-video" controls>
            <source src={`${process.env.PUBLIC_URL}/beef/mutton1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Show video for Mutton category */}
      {selectedCategory === 'mutton' && (
        <div className="video-container">
          <h3>Watch our exclusive video about mutton</h3>
          <video className="marketplace-video" controls>
            <source src={`${process.env.PUBLIC_URL}/mutton/mutton2.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="image-gallery">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="image-card">
              {/* Wrap image in Link to navigate */}
              <Link 
  to={`/item-details/${item.id}`} 
  state={{ item }} // move state outside the pathname object
>
  <img src={item.src} alt={item.alt} className="image-item" />
</Link>

              <p>{item.alt}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
