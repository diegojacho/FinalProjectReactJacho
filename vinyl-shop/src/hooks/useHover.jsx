import { useState } from "react";

export function useHover(){
    const [isHovered, setIsHovered] = useState(false);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const toggleInfo = () => {
      setIsInfoVisible(!isInfoVisible);
    };

    return {isHovered, isInfoVisible, handleMouseEnter, handleMouseLeave, toggleInfo}
}