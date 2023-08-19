import React from 'react';
import ItemCount from './ItemCount';
import '../style/ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="item-image">
        <img src={require(`/public/images/${item.image}`)} alt={item.title} />
      </div>
      <div className="item-info">
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <ItemCount/>
      </div>
    </div>
  );
};

export default ItemDetail;