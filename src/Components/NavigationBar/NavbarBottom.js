// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import Logo from '../../Assets/Img/Logo.png'
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBottom = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <>
    <Navbar
    expand="lg"
    fixed="top"
    bg={isScrolled ? 'transparent' : 'transparent'}
    className='navbar-bottom'
    style={{
      backdropFilter: isScrolled ? 'blur(40px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
      // borderTop: isScrolled ? '1px solid #ccc' : 'none',
    }}
  >
    <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll " className='' />
                    <Navbar.Collapse id="basic-navbar-nav navbarScroll ">
                        <Nav className=" custom-nav fs-5 fw-medium col-md-6 offset-md-4" variant="underline">
                        <Nav.Link onClick={handleShow} ><GiHamburgerMenu className='pb-1' /> Menu</Nav.Link>
                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Close</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <div className='fs-3'>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/radio">Radio</Nav.Link>
                            <Nav.Link href="#">OZ TV</Nav.Link>
                            <Nav.Link href="#">Partnership</Nav.Link>
                            <Nav.Link href="#">Service</Nav.Link>
                            <Nav.Link href="/contact">Contact us</Nav.Link>
                            </div>
                          </Offcanvas.Body>
                        </Offcanvas>
                        <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="City" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://bandung.ozradio.id/">Bandung (103.1 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiojakarta.com/">Jakarta (90.8 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiobali.id/">Bali (101.2 FM)</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="#">Listen</Nav.Link>
                            <Nav.Link href="#">Watch</Nav.Link>
                            <Nav.Link href="#">Read</Nav.Link>
                            <Nav.Link href="#">Playlist</Nav.Link>
                            <Nav.Link href="#">Event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    <br/>
    </>
  );
};

export default NavBottom;
