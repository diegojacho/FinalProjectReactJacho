import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShopCart } from "../contexts/CartShopContext";
import { Button, Modal, Stack } from "react-bootstrap";
import { ShopCartItem } from "./ShopCartItem";
import { setCurrency } from "../helper/setCurrency";
import {NavLink} from "react-router-dom"
import {Nav} from 'react-bootstrap'

export function ShopCart(){
    const {cartItems, clear, totalOrder} = useShopCart()
    const [show, setShow] = useState(false);
    const handleShow =()=> setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
        <div onClick={handleShow} style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"20px"}}/>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            {cartItems.length === 0 ? 
                (<>
                    <Modal.Header closeButton>
                        <Modal.Title>Your cart is empty</Modal.Title>
                    </Modal.Header>
                </>) :
                (<>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack classname='gap-2'>
                        {cartItems.map(item => (<ShopCartItem key={item.id} {...item}/>)) }
                    </Stack>
                    <div className="d-flex justify-content-end fw-bold mt-3">Total {setCurrency(totalOrder)}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>clear()}>Empty Cart</Button>
                    <Nav.Link to="/checkout" as={NavLink}><Button onClick={()=>setShow(false)} variant="primary">Checkout</Button></Nav.Link>
                </Modal.Footer>
                </>)
            }
        </Modal>
        </>
    )
} 