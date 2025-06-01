import React from "react";

const Cart = ({ cart }) => (
  <div>
    <h2>🛒 Cart</h2>
    <ul>
      {cart.map((item, i) => (
        <li key={i}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
);

export default Cart;
