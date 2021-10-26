import React, { useEffect, useState } from "react";
import logo from '../assets/images/pikky-logo.png';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

export default function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="col-12">
                <Navbar bg="light" expand="lg">
                    <Container fluid> 
                        <Navbar.Brand href="#home"><img width="50" src={logo} alt={'logo'} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto main-menu">
                                <Nav.Link href="#home">Image</Nav.Link>
                                <Nav.Link href="#link">Data</Nav.Link>
                                <Nav.Link href="#link">User</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
                <div className="col">
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}