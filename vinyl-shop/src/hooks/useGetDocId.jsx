import { useState, useEffect } from "react"
import { getFirestore, getDoc, doc } from "firebase/firestore"

export function useGetDocId(id){
    const [shopItem, setShopItem] = useState()

    useEffect(()=>{
        const db = getFirestore();

        const itemFirestore = doc(db, "items", id);
        getDoc(itemFirestore).then(result => {
            if (result.exists()) {
            setShopItem({id: result.id, ...result.data() })}
        })
    }, [id])

    return{
        shopItem,
    }
}