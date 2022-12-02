import React from "react";
import '../App.css'

import { Nav, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
const Menu = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="#home"> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio </Nav.Link>
                    <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                    <Nav.Link href="/estudios">Estudios</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};
export default Menu;