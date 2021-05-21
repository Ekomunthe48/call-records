import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer font-weight-bold">
            <Container>
                <span className="text-info">Copyright © Eko Bambang Prasetio Munthe {new Date().getFullYear()}.</span>
            </Container>
        </footer>
    );
};

export default Footer;