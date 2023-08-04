import React from 'react';
import './ItemsListContainer.css';

const ItemsListContainer = (props) => {
    return (
      <div className="items-list-container">
       {props.greeting}
      </div>
    );
  };
  

export default ItemsListContainer;
