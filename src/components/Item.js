import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create state to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Toggle item in cart on button click
  const handleClick = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
