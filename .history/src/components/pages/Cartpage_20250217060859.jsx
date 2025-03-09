import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function CartPage() {
  const location = useLocation();
  const cart = location.state?.cart || []; // Access cart state passed via location

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <ul>
          {cart.map((course, index) => (
            <li key={index}>
              <img src={course.image} alt={course.name} />
              <p>{course.name} - {course.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;












