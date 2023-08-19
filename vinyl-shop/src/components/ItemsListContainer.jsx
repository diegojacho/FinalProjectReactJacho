import React from 'react';
import ItemList from './ItemList';
import '../style/ItemsListContainer.css';

const ItemsListContainer = (props) => {

    return (
      <div className="items-list-container">
       {props.greeting}
       <ItemList/>
      </div>
    );
  };
  

export default ItemsListContainer;
