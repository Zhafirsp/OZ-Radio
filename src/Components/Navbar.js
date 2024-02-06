/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Logo from '../Assets/Logo.png'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <Navbar
    expand="lg"
    fixed="top"
    bg={isScrolled ? 'transparent' : 'transparent'}
    className={isScrolled ? 'scrolled' : ''}
    style={{
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
    }}
  >
    <Container fluid>
      <Navbar.Brand className="navbar-links-container">
        <a href='#Home'><img src={Logo} alt="" className="nav-logo" /></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll" className='' />
        <Navbar.Collapse id="basic-navbar-nav navbarScroll">
      <Nav className="ms-auto custom-nav" variant="underline">
        <NavDropdown title="City" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://bandung.ozradio.id/">Bandung (103.1 FM)</NavDropdown.Item>
              <NavDropdown.Item href="https://ozradiojakarta.com/">Jakarta (90.8 FM)</NavDropdown.Item>
              <NavDropdown.Item href="#">Bali (101.2 FM)</NavDropdown.Item>
              <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#program">Program</Nav.Link>
            <Nav.Link href="#broadcaster">Broadcaster</Nav.Link>
            {/* <Nav.Link href="#action1">Chart</Nav.Link> */}
            <Nav.Link href="#contact-us">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
