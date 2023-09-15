import {Stack, Button } from "react-bootstrap";
import { useShopCart } from "../contexts/CartShopContext";
import { setCurrency } from "../helper/setCurrency";


export function ShopCartItem({id, title, artist, count, stock}){
    const { shopItems, removeFromCart, increaseQuantity, decreaseQuantity } = useShopCart()
    const  item = shopItems.find(i => i.id === id)

    return(
        <Stack direction="horizontal" gap={1} className="d-flex align-items-center">
            <img src={item.url} alt={item} style={{ height:"100px", width:"auto", objectFit:"cover"}}/>
            <div className="me-auto d-flex flex-column justify-content-center">
                <div className="mb-1" style={{fontSize:"16px"}}>{`${item.artist}`}</div>
                <div className="mb-1">{`${setCurrency(item.price)}`}</div>
                <div className="d-flex align-items-center justify-content-between" style={{fontSize:"12px", fontStyle:"italic"}}>
                    <div className="mb-3 justify-content-center align-items-center">
                        <button className="count-button" type ="button" onClick={()=>decreaseQuantity(id, title, artist)}>-</button>
                        <span className="count">{`${count}`}</span>
                        {count<stock && <button className="count-button" type ="button" onClick={()=>increaseQuantity(id, title, artist)}>+</button>}
                    </div>
                </div>
            </div>
            <div>{`Total :${setCurrency(count*item.price)}`}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id, title, artist, count)}>x</Button>
        </Stack>
    )
}