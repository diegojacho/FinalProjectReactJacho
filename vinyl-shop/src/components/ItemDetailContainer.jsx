import React, {useState, useEffect} from 'react';
import itemsData from '../data/items.json';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      const fetchItem = async () => {
        const selectedItem = itemsData.items.find(item => item.id === itemId);
        setItem(selectedItem);
      };
  
      fetchItem();
    }, [itemId]);
  
    return (
      <div className="item-detail-container">
        {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
      </div>
    );
  };
  
  export default ItemDetailContainer;