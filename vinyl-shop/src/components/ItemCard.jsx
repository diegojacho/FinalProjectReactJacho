import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Button } from 'react-bootstrap';
import '../style/ItemCard.css';

const ItemCard =({item})=>{
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

    return (
       <div
        className={`item-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <img src={require(`/public/images/${item.image}`)} alt={item.title} className="item-image" />
        <div className={`item-info ${isHovered ? 'visible' : ''}`}>
          <h4>{item.artist}</h4>
          <h4>{item.title}</h4>

          <Button className="view-description" onClick={toggleInfo}>
            View Description
          </Button>
          {isInfoVisible && (
            <div className="item-description">
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          )}
           <ItemCount />
        </div>
      </div>
    );
};

export default ItemCard;