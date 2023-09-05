import {createContext, useContext, useState} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartShopContext = createContext()

export function useShopCart(){
    return useContext(CartShopContext)
}

export function CartShopProvider({children}){
    const [cartItems, setCartItems] = useState([])
   
   
    const cartCount = cartItems.reduce(
        (count, item) => item.count + count, 0
    )

    function addCartQuantity(id, title, artist, count){
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
            if (currentItems.find(item=>(item.id===id && item.title===title && item.artist===artist)) == null){
                return(
                    [...currentItems, {id, title, artist, count}]
                )
            } else {
                return(
                    currentItems.map(item=>{
                        if(item.id===id && item.title=== title && item.artist===artist){
                            return(
                                {...item, count: item.count + count}
                            )
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

    function increaseQuantity(id, title, artist){
        setCartItems(currentItems=>{
            if (currentItems.find(item=>(item.id===id && item.title === title && item.artist === artist))){
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
            if(currentItems.find(item=>(item.id===id && item.title === title && item.artist === artist)) !==undefined){
                return(
                    currentItems.map(item=>{
                        if (item.id === id && item.title === title && item.artist === artist){
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
    const AllObjects ={
        cartItems, setCartItems, cartCount, addCartQuantity, removeFromCart, increaseQuantity, decreaseQuantity
    }

    return(
        <CartShopContext.Provider value ={AllObjects}>
            {children}
        </CartShopContext.Provider>
    )
}
