import React from "react";
import { useShopCart } from "../hooks/CartShopContext";
import { useCount } from "../hooks/useCount";

export function ItemCount({id, title, artist}) {
    const {count, handleIncrement, handleDecrement}= useCount()
    const { addCartQuantity } = useShopCart()

    return(
    <div className="item-count">
      <button className="count-button" onClick={handleDecrement}>-</button>
      <span className="count">{count}</span>
      <button className="count-button" onClick={handleIncrement}>+</button>
      <button className="add-to-cart-button" onClick={()=>addCartQuantity(id, title, artist, count)}>
        Add to Cart
      </button>
    </div>
    );
};