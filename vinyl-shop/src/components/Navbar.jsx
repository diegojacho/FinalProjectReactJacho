import React from 'react';
import { Navbar, Container, Nav, FormControl, Button, Form } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand>
            <img
                src="/vinyl-logo.png"
                alt="Vinyl Logo"
                style={{ height: '30px', marginRight: '10px' }}
            />
          Vinyl Record Store
        </Navbar.Brand>
        <Nav className="flex-fill">
          <Nav.Link href="#catalog">Catalog</Nav.Link>
          <Nav.Link href="#apparel">Apparel</Nav.Link>
          <Nav.Link href="#wishlist">Wishlist</Nav.Link>
          <Nav.Link href="#collections">Collections</Nav.Link>
          <Nav.Link href="#salesdeals">Sales & Deals</Nav.Link>
        </Nav>
        <Form inline className="me-3 search-form">
          <FormControl type="text" placeholder="Search..." className="m-2 form-control" />
        </Form>
        <CartWidget/> 
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
