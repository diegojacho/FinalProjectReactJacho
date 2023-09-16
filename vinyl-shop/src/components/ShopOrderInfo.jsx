import {Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSendOrder } from "../hooks/useSendOrder";
import { Button } from "react-bootstrap"

export function ShopOrderInfo({cartItems, totalOrder}){
    const { formValues, handleChange, onSendOrder } = useSendOrder()
    const handleSubmit = (e)=>{
        e.preventDefault()
        onSendOrder(totalOrder)
    }
    return(
        <>
        {cartItems.length !== 0 &&
            (<Container className="mt-5">
                <Form onSubmit={handleSubmit}>
                    <h3>Customer Info</h3>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required placeholder="John" type="text" name="name" onChange={handleChange} value={formValues.name}/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required placeholder="Smith" type="text" name="lastname" onChange={handleChange} value={formValues.lastname}/>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>@email</Form.Label>
                        <Form.Control required placeholder="youremail@gmail.com" type="email" name="email" onChange={handleChange} value={formValues.email}/>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required placeholder="888-888-8888" type="number" name="phone" onChange={handleChange} value={formValues.phone}/>
                    </Form.Group>
                    <Button type="submit">Complete</Button>
                    
                </Form>
            </Container>)
        }
        </>
    )

}