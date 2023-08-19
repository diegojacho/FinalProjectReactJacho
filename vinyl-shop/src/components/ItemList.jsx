import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard'
import itemsData from '../data/items.json';

const fetchItems =() =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(itemsData.items);
        }, 2000);
    });
};

const ItemList = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetchItems().then((fetchedItems)=>{
            setItems(fetchedItems);
        });
    },[]);

    return (
        <div className="item-list row">
        {items.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3"> 
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    );
};

export default ItemList;