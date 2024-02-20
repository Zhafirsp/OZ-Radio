import React from "react";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok, FaRegCopyright } from "react-icons/fa";
import {Container, Row, Button, Form, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
    {/* <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FE9E0D" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg> */}
     <div className="footer-wrapper">
      <div className="footer-section-one col-md-3 ms-5">
        <div className="footer-section-columns ms-5">
          <h2 className="mt-4">Category</h2>
          <Row>
            <Col>
              <h5><a href="#"   className="text-decoration-none">Music</a></h5>
              <h5><a href="#"   className="text-decoration-none">Sport</a></h5>
              <h5><a href="#"  className="text-decoration-none">Lifestyle</a></h5>
              <h5><a href="#"  className="text-decoration-none">Education</a></h5>
              <h5><a href="#"  className="text-decoration-none">Politic</a></h5>
            </Col>
            <Col>
              <h5><a href="#"  className="text-decoration-none">Comedy</a></h5>
              <h5><a href="#"  className="text-decoration-none">Technology</a></h5>
              <h5><a href="#"  className="text-decoration-none">Religy</a></h5>
              <h5><a href="#"  className="text-decoration-none">Art</a></h5>
            </Col>
          </Row>
        </div>
       </div>
      <div className="footer-section-two col-md-3 me-5">
        <div className="footer-section-columns me-5">
        <h2>Event</h2>
        <h5><a href = "#">Live Music</a></h5>
        <h5><a href = "#">Live Concert</a></h5>
        <h5><a href = "#">Music Festival</a></h5>
        <h5><a href = "/interview">Interviews</a></h5>
        </div>
      </div>
      <div className="footer-section-three col-md-3 me-5">
        <div className="footer-section-columns me-5">
        <h2>About Us</h2>
        <h5><a href = "/about">About</a></h5>
        <h5><a href = "/radio">OZ Radio</a></h5>
        <h5><a href = "/youtube">OZ TV</a></h5>
        <h5><a href = "/contact">Partnership</a></h5>
        <h5><a href = "#">Service</a></h5>
        </div>
      </div>
      <div className="footer-section-four col-md-4 me-5">
      <h2>Follow Us</h2>
        <ul class="col-md-3 d-flex align-items-center list-unstyled icons-footer">
            <li class="ms-3"><a href="https://www.instagram.com/ozradiobandung/"><BsInstagram /></a></li>
            <li class="ms-3"><a href="https://twitter.com/ozradiobandung?s=20"><BsTwitter /></a></li>
            <li class="ms-3"><a href="https://www.youtube.com/@OZRADIO"><BsYoutube /></a></li>
            <li class="ms-3"><a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff"><FaSpotify /></a></li>
            <li class="ms-3"><a href="https://www.facebook.com/ozradiobandung"><FaFacebookF /></a></li>
            <li class="ms-3"><a href="https://www.tiktok.com/@ozradio?lang=en"><FaTiktok  /></a></li>
          </ul>
        <div className="footer-section-columns me-5">
        <p className="fw-bold mt-3">Never miss the latest news from OZ Radio by Signing up</p>
        <form className="d-flex" role="submit">
          <input className="form-control me-2" type="email" placeholder="Email" aria-label="email"/>
          <Button type="submit" className="btn btn-warning">Subscribe</Button>
        </form>
            <p className="">By subscribing, you you agree to our <a href="#" className="terms">Terms & Conditions</a> and <a href="#" className="terms">Privacy Policy</a></p>
        </div>
      </div>
    </div>
      <div class="container bottom-footer">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-12 d-flex align-items-center">
           <p>2024 OZ Radio Limited. All Rights Reserved. OZ Radio &copy; is a registered trademark of OZ Radio Indonesia. <a href="#" className="terms">Terms & Conditions</a> | <a href="#" className="terms">Privacy Policy</a> | <a href="#" className="terms">Cookie Policy</a></p>
           <p className="ms-auto fw-bold "><a href="#" className="terms">Indonesia</a></p>
          </div>
        </footer>
      </div>
      </div>
  );
};

export default Footer;
