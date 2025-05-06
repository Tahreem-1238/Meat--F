import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { item } = location.state || {};

  useEffect(() => {
    if (!item) console.log("Item not found");
  }, [item]);

  const handleAddToCart = () => {
    setOrderPlaced(true);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev * 2);
  };

  if (!item) return <div>Item not found</div>;

  const pricePerKg = item.pricePerKg || 1000;
  const totalPrice = pricePerKg * quantity;

  return (
    <div className="item-details-container">
      <div className="item-flex">
        <img src={item.src} alt={item.alt} className="item-image" />

        <div className="item-info">
          <h2 className="item-name">{item.alt}</h2>
          <p className="item-description">
            {item.description || 'High quality and fresh meat, perfect for your meals.'}
          </p>
          <p><strong>Price per Kg:</strong> Rs. {pricePerKg}</p>
          <p><strong>Quantity:</strong> {quantity} Kg</p>
          <p><strong>Total Price:</strong> Rs. {totalPrice}</p>

          <div className="controls">
            <button className="increment-btn" onClick={handleIncrement}>+</button>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
          </div>

          {orderPlaced && (
            <div className="order-confirmation">
              <h3>✅ Thank you! Your order has been placed successfully.</h3>
            </div>
          )}
        </div>
      </div>

      <div className="additional-info">
        <h3>Terms & Conditions</h3>
        <ul>
          <li>30-day money-back guarantee</li>
          <li>Shipping: 2-3 business days</li>
          <li>Secure packaging & fast delivery</li>
        </ul>
      </div>

      <div className="related-sales">
        <h3>You may also like</h3>
        <div className="related-carousel">
          <img src="https://i.pinimg.com/736x/cb/13/22/cb13225916277d4b9668ea14c383800b.jpg" alt="Related 1" />
          <img src="https://i.pinimg.com/736x/6d/22/03/6d2203862cc37eab98991e07324298e4.jpg" alt="Related 3" />
          <img src="https://i.pinimg.com/736x/15/6d/ff/156dff398dceb174f13b9ceca99c2449.jpg" alt="Related 4" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

