import React, { useState } from 'react';
import { Navbar, Container, Nav, FormControl, Button, Form } from 'react-bootstrap';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
import '../style/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
            <a href='/'>
            <img
                src="./vinyl-logo.png"
                alt="Vinyl Logo"
                style={{ height: '30px', marginRight: '10px' }}
            />
            </a>
            <a style={{ color: 'inherit', textDecoration: 'inherit'}} href='/'>Vinyl Record Store</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="me-auto">
          <Nav.Link to="/catalog" as={NavLink}>Catalog</Nav.Link>
          <Nav.Link to="/apparel" as={NavLink}>Apparel</Nav.Link>
          <Nav.Link to="/picks" as={NavLink}>Today's Pick</Nav.Link>
          <Nav.Link to="/deals" as={NavLink}>Sales & Deals</Nav.Link>
        </Nav>
        <Form inline className="me-3 search-form">
          <FormControl type="text" placeholder="Search..." className="m-2 form-control" />
        </Form>
        <CartWidget/> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
