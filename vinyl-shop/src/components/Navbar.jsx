import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import logo from '../assets/vinyl-logo.png'


export function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >
            <Nav.Link to="/" as={NavLink}>
              <div className="d-flex">
              <img src={logo} alt="Vinyl Logo" style={{ height: '35px', marginRight: '10px', marginTop:"10px" }}/><p style={{ color: 'inherit', textDecoration: 'inherit', marginTop:"10px"}} href='/'>Vinyl Record Store</p>
              </div>
            </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="me-auto">
            <div className="me-auto">
              <ul className="navbar-nav">
                <Nav.Link to="/catalog" as={NavLink}>Catalog</Nav.Link>
                <Nav.Link to="/categories" as={NavLink}>Categories</Nav.Link>
                <Nav.Link to="/apparel" as={NavLink}>Apparel</Nav.Link>
                <Nav.Link to="/picks" as={NavLink}>Today's Pick</Nav.Link>
              </ul>
            </div>
          </Nav>
        <CartWidget/> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
