import React, {useState} from 'react';
import { Item } from './Item';
import { SearchItems } from "./SearchItems";

export function ItemList({shopItems, switchSelection}) {
    
    const[search, setSearch] = useState('')

    return (
    <>
        <SearchItems updateFilter={(search) => setSearch(search)} switchSelection={switchSelection}></SearchItems>
        <div className="item-list row">
        {shopItems.filter((item)=>{
            return(search.toLocaleLowerCase() === " " ? item : item.artist.toLowerCase().includes(search.toLowerCase()))
        }).map(item => {
            return(
                 <div key={item.id} className="col-sm-6 col-md-4 col-lg-3"> 
                 <Item key={item.id} {...item}></Item>
                 </div>
            )}
        )}
      </div>
    </>
    )
};

 