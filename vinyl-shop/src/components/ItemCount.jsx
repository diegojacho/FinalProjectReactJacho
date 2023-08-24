import React from "react";
import { useCount } from "../hooks/useCount";

export function ItemCount() {
    const {count, handleIncrement, handleDecrement, handleAddToCart}= useCount()

    return(
    <div className="item-count">
      <button className="count-button" onClick={handleDecrement}>-</button>
      <span className="count">{count}</span>
      <button className="count-button" onClick={handleIncrement}>+</button>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
    );
};