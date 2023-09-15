import { useShopCart } from "../contexts/CartShopContext";
import { useCount } from "../hooks/useCount";

export function ItemCount({id, title, artist, stock}) {
    const { count, handleIncrement, handleDecrement } = useCount()
    const { addCartQuantity } = useShopCart()

    return(
      <div className="item-count">
        <button className="count-button" onClick={handleDecrement}>-</button>
        {count<stock ? (<span className="count">{count}</span>):(<span className="count">{stock}</span>)}
        {count<stock && <button className="count-button" onClick={handleIncrement}>+</button>}
        <button className="add-to-cart-button" onClick={()=>addCartQuantity(id, title, artist, count, stock)}>
          Add to Cart
        </button>
      </div>
    );
};