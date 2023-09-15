import { useParams } from "react-router-dom";
import { useGetDocId } from "../hooks/useGetDocId";
import { ItemListLoading } from "../components/ItemListLoading";
import { ItemDetails } from "../components/ItemDetails"

export function ItemDescription() {

    const { IDE } = useParams()
    const { shopItem } = useGetDocId(IDE)

    return(
       <>
       {shopItem === undefined ? (<ItemListLoading/>): (<ItemDetails key={shopItem.id} item={shopItem}></ItemDetails>)}
       </>
        )
        
}