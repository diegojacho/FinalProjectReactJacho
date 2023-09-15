import { useShopCart } from "../contexts/CartShopContext";
import { ShopCartSummary } from "../components/ShopCartSummary";
import { ShopOrderInfo } from "../components/ShopOrderInfo";

export function ShopCartCheckout(){
    const {cartItems, totalOrder} = useShopCart()

    return(
        <>
            <ShopCartSummary cartItems={cartItems} totalOrder={totalOrder}></ShopCartSummary>
            <ShopOrderInfo cartItems={cartItems} totalOrder={totalOrder}></ShopOrderInfo>
        </>
    )
    
    
}