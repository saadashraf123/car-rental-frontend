import React from 'react'
import "./style.module.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import car from '../../assets/images/car.png'
import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';


const NavBar = () => {
    return (
        <Navbar expand="md" sticky="top" className="px-3 me-3 bg-white">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/login" className='text-danger text-decoration-none fs-2'>
                        <FaCarSide className='me-2' />
                        The Rentals
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <RxAvatar className='fs-1' />
                <NavDropdown title="username" id="basic-nav-dropdown" className='me-5'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to="/">Logout</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
}

export default NavBar