import { useState } from "react";

export function useCount (onAddToCart){
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

    return {count, handleIncrement, handleDecrement, handleAddToCart}
}