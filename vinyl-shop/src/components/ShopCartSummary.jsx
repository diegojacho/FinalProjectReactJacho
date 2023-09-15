import { Container, Table} from "react-bootstrap";
import { ShopCartCheckoutItem } from "./ShopCartCheckoutItem";
import { setCurrency } from "../helper/setCurrency";

export function ShopCartSummary({cartItems, totalOrder}){
    return(
        <>
        {cartItems.length === 0 ? (<Container className="d-flex justify-content-cneter mt-4"><h3>Your cart is empty</h3></Container>):
        (<Container>
            <h1>Checkout</h1>
            <Table stripped bordered hover>
                    <tr>
                        <th>Item</th>
                        <th></th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                <tbody>
                    {cartItems.map(item => (<ShopCartCheckoutItem key={item.id} {...item}/>))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total</td>
                        <td>{setCurrency(totalOrder)}</td>
                    </tr>
                </tfoot>
            </Table>
        </Container>)
        }
        </>
    )
}