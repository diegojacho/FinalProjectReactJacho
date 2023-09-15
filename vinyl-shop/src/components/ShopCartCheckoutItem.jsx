import { useShopCart } from "../contexts/CartShopContext";
import { setCurrency } from "../helper/setCurrency";
import { Button } from "react-bootstrap";

export function ShopCartCheckoutItem({id, title, artist, count}){
    const { shopItems, removeFromCart } = useShopCart()
    const item = shopItems.find(i=>i.id===id)

    return(
        <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{setCurrency(item.price)}</td>
            <td>{count}</td>
            <td>
                <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id, title, artist, count)}>x</Button>
            </td>
        </tr>
    )

}