import {useState, useEffect } from "react";


export function useFilter(data){
    const [shopItems, setShopItems]= useState([])
    const [shopRenderItems, setShopRenderItems ] = useState([])
    const [categories, setCategories] = useState('ALL')

    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(() => resolve(data), 2000)
        })
        promise.then(result=>{
            setShopItems(result)
            setShopRenderItems(result)})
        }, [data])

        const switchSelection = (e) => {
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
