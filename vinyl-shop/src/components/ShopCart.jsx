import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShopCart } from "../hooks/CartShopContext";
import { Button, Modal, Stack } from "react-bootstrap";
import { ShopCartItem } from "./ShopCartItem";
import { setCurrency } from "../helper/setCurrency";
import data from '../data/items.json'

export function ShopCart(){
    const {cartItems} = useShopCart()
    const [show, setShow] = useState(false);
    const handleShow =()=> setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
        <div onClick={handleShow} style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"20px"}}/>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack>
                    {cartItems.map(item => (<ShopCartItem key={item.id} {...item}/>)) }
                </Stack>
                <div className="d-flex justify-content-end fw-bold mt-3">
                    Total {setCurrency(
                        cartItems.reduce((total, cartItem)=>{
                            const item = data.find(i => i.id === cartItem.id)
                            return(total + (item?.price || 0) * cartItem.count)},0) 
                            )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="primary">Checkout</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
} 