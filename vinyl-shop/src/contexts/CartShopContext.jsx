import { getDocs, getFirestore, collection } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartShopContext = createContext()

export function useShopCart(){
    return useContext(CartShopContext)
}

export function CartShopProvider({children}){
    
    const [shopItems, setShopItems] = useState([])
    useEffect(()=>{
        const db=getFirestore();
        const itemsFirestore = collection(db, "items");
        getDocs(itemsFirestore).then(result=>{
            setShopItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    },[])

    const [cartItems, setCartItems] = useState([])
   
    const cartCount = cartItems.reduce(
        (count, item) => item.count + count, 0
    )

    const totalOrder = cartItems.reduce((total, cartItem)=>{
        const item = shopItems.find(i => i.id === cartItem.id)
        return(total + (item?.price || 0) * cartItem.count)
    },0
    )

    function addCartQuantity(id, title, artist, number, stock){
        toast.success('Item added to your cart',{
            autoClose:200,
            position:"top-right",
            hideProgressBar:true,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:false,
            progress:undefined,
            theme:"colored",
        });
        setCartItems(currentItems=>{
            if (currentItems.find(item => (item.id===id && item.title===title && item.artist===artist)) == null){
                return(
                    [...currentItems, {id, title, artist, count:number, stock}]
                )
            } else {
                return(
                    currentItems.map(item=>{
                        if(item.id===id && item.title=== title && item.artist===artist){
                            if(item.count + number <= stock){
                                return(
                                    {...item, count: item.count + number}
                                )
                            } else {
                                return (
                                    {...item, count: stock}
                                )
                            }   
                        } else {
                            return item
                        }
                    })
                )
            }
        })
    }
    
    function removeFromCart(id, title, artist){
        setCartItems(currentItems=>{
            return(
                currentItems.filter(item=>(item.id !== id || item.title !== title || item.artist !== artist))
            )
        })
    }

    function clear(){
        setCartItems([])
    }

    function increaseQuantity(id, title, artist){
        setCartItems(currentItems=>{
            if (currentItems.find(item => (item.id===id && item.title === title && item.artist === artist))){
                return(
                    currentItems.map(item=>{
                        if (item.id === id && item.title === title && item.artist === artist){
                            return(
                                {...item, count: item.count + 1}
                            )
                        } else {
                            return item
                        }
                    })
                )
            }
        })

    }

    function decreaseQuantity(id, title, artist){
        setCartItems(currentItems=>{
            if(currentItems.find(item=>(item.id===id && item.title === title && item.artist === artist))!==undefined){
                return(
                    currentItems.map(item=>{
                        if (item.id === id && item.title === title && item.artist === artist && item.count>1){
                            return(
                                {...item, count: item.count - 1}
                            )
                        } else {
                            return item 
                        }
                    })
                )
            }
        })
    }
    const AllObjects = {
        cartItems, shopItems, cartCount, totalOrder, addCartQuantity, removeFromCart, clear, increaseQuantity, decreaseQuantity
    }

    return(
        <CartShopContext.Provider value ={AllObjects}>
            {children}
        </CartShopContext.Provider>
    )
}
