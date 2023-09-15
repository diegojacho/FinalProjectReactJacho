import { useState, useEffect } from "react"
import { getFirestore, getDocs, collection } from "firebase/firestore"

export function useGetCollection(){
    const [shopItems, setShopItems]= useState([])
    const [shopRenderItems, setShopRenderItems ] = useState([])
    const [categories, setCategories] = useState('ALL')

    useEffect(()=>{
        const db = getFirestore();

        const itemsFirestore = collection(db,"items");
        getDocs(itemsFirestore).then(result => {
            setShopItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})));
            setShopRenderItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }, [])

    const switchSelection = (e) =>{
        setCategories(e.target.value)
        if (e.target.value === "ALL"){
            setShopRenderItems(shopItems)
        } else {
            const newShopItems = shopItems.filter(
                item => item.category === e.target.value
            )
            setShopRenderItems(newShopItems)
        }
    }
    
    return{ shopItems: shopRenderItems, categories, switchSelection
    }
}
