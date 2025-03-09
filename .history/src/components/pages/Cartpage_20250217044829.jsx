import React, { useState } from "react";

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} 
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Courses = ({ cart, setCart }) => {
  const courseList = [
    { name: "UI/UX Design", price: "10000", id: "ui-ux" },
    { name: "Graphic Design", price: "10000", id: "graphic-design" },
    { name: "Data Science", price: "10000", id: "data-science" }
  ];

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            {course.name} - ${course.price} 
            <button onClick={() => addToCart(course)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CartPage, Courses };




