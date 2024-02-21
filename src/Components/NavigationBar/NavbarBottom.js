// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import Logo from '../../Assets/Img/Logo.png'
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../Assets/Css/nav_bottom.css'

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
                        <Nav.Link onClick={handleShow} className='offcanvas-menu'><GiHamburgerMenu className='pb-1' /></Nav.Link>
                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Close</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <div className='fs-4'>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/radio">Radio</Nav.Link>
                            <Nav.Link href="#">TV</Nav.Link>
                            <Nav.Link href="/event">Events</Nav.Link>
                            <hr/>
                            <Nav.Link href="#">Sustainability</Nav.Link>
                            <Nav.Link href="/contact">Advertising</Nav.Link>
                            <Nav.Link href="#">Community</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            </div>
                          </Offcanvas.Body>
                        </Offcanvas>
                        <Nav.Link href="/">Home</Nav.Link>
                            {/* <NavDropdown title="City" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://bandung.ozradio.id/" target='_blank'>Bandung (103.1 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiojakarta.com/" target='_blank'>Jakarta (90.8 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiobali.id/" target='_blank'>Bali (101.2 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/radio">Radio</Nav.Link>
                            <Nav.Link href="/youtube">TV</Nav.Link>
                            <Nav.Link href="/event">Events</Nav.Link>
                            <Nav.Link href="/about">Visit</Nav.Link>
                            <Nav.Link href="#">Playlist</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    <br/>
    </>
  );
};

export default NavBottom;
