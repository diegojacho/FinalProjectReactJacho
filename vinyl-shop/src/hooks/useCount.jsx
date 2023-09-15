import { useState } from "react";

export function useCount(){
    const [count,  setCount] = useState(1);
    
    const handleIncrement =()=>{ 
            setCount(count+1);
        
    };
    
    const handleDecrement =()=>{
        if (count>1){
            setCount(count-1);
        }
    }
    
    return {count, handleIncrement, handleDecrement}
}