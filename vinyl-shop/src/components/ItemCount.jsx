import React, {useState} from "react";
import '../style/ItemCount.css';

const ItemCount = ({onAddToCart}) =>{
    const [count, setCount] = useState(1);
    const handleIncrement =()=>{
        setCount(count+1);
    };
    const handleDecrement =()=>{
        if (count>1){
            setCount(count-1);
        }
    };
    const handleAddToCart =() =>{
        onAddToCart(count);
    };
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

export default ItemCount;