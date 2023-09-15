import { ItemList }   from './ItemList';
import { ItemListLoading } from "./ItemListLoading";
import { useGetCollection } from "../hooks/useGetCollection";

export function ItemsListContainer (props) {
  const { shopItems, switchSelection } = useGetCollection()
  
    return (
    <>
       <h4 style={{ margin:"20px" }}>{props.greeting}</h4>
       {shopItems.length === 0 ? (<ItemListLoading/>): (<ItemList shopItems={shopItems} switchSelection={switchSelection}/>)}
    </> 
    );
  }
