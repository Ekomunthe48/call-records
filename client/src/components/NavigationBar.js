import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo - Primary.png'
import HomeLogo from '../assets/011-house.png'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container className='text center'>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="225"
                        height="75"
                        className="d-inline-block align-top"
                        alt="Covid 19"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to='/'>
                            <Nav className='d-flex flex-row justify-content-center text-info'>
                                <img
                                    src={HomeLogo}
                                    width="20"
                                    height="20"
                                    className="d-flex align-top mr-2"
                                    alt="Covid 19"
                                />
                                <span className='font-weight-bold'>
                                Home
                                </span>
                                </Nav>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;