import data from "../data/items.json"
import { useFilter } from "../hooks/useFilter";
import { ItemList }   from './ItemList';
import { ItemListLoading } from "./ItemListLoading";

export function ItemsListContainer (props) {
  const {shopItems, switchSelection} = useFilter(data)
    return (
    <>
       <h4 style={{ margin:"20px" }}>{props.greeting}</h4>
       {shopItems.length === 0 ? (<ItemListLoading/>): (<ItemList shopItems={shopItems} switchSelection={switchSelection}/>)}
    </> 
    );
  }