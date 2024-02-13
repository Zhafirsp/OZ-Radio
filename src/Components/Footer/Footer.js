import React from "react";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok, FaRegCopyright    } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <>
    <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FE9E0D" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
     <div className="footer-wrapper">
      <div className="footer-section-one col-md-4">
        <div className="footer-section-columns">
          <h1 >Visit Us</h1>
          <h5><a href="https://bandung.ozradio.id/"  className="text-decoration-none">Bandung</a></h5>
          <h5><a href="https://ozradiojakarta.com/" className="text-decoration-none">Jakarta</a></h5>
          <h5><a href="#"  className="text-decoration-none">Bali</a></h5>
          <h5><a href="#"  className="text-decoration-none">Aceh</a></h5>
        </div>
       </div>
      <div className="footer-section-two col-md-4">
        <div className="footer-section-columns">
        <h1>About Us</h1>
        <h5><a href = "#">About</a></h5>
        <h5><a href = "/contact">Contact</a></h5>
        <h5><a href = "/">Career</a></h5>
        </div>
      </div>
      <div className="footer-section-three col-md-4">
        <div className="footer-section-columns">
        <h1>Newsletter</h1>
        <form className="d-flex" role="submit">
          <input className="form-control me-2" type="email" placeholder="Email" aria-label="email"/>
          <Button type="submit" className="btn btn-warning">Subscribe</Button>
        </form>
            <p>By submitting, you give OZ permission to store and process your personal information so we can provide you with the content you’ve requested. For more information, please see our Privacy Policy.</p>
        </div>
      </div>
    </div>
      <div class="container bottom-footer">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary d-flex">
              <p className="span-footer"><a href = "#">Privacy</a></p>
              <p className="span-footer"><a href = "#">Policy</a></p>
              <p className="span-footer"><a href = "#">Terms</a></p>
            </span>
          </div>
          <div className="col-md-4 d-flex align-items-center">
              <p className="copyright-footer text-center"><FaRegCopyright /> OZ Media, Inc. 2024. All Rights Reserved.</p>
          </div>
          <ul class="col-md-4 d-flex align-items-center list-unstyled icons-footer">
                  <li class="ms-3"><a href="https://www.instagram.com/ozradiobandung/"><BsInstagram /></a></li>
                  <li class="ms-3"><a href="https://twitter.com/ozradiobandung?s=20"><BsTwitter /></a></li>
                  <li class="ms-3"><a href="https://www.youtube.com/@OZRADIO"><BsYoutube /></a></li>
                  <li class="ms-3"><a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff"><FaSpotify /></a></li>
                  <li class="ms-3"><a href="https://www.facebook.com/ozradiobandung"><FaFacebookF /></a></li>
                  <li class="ms-3"><a href="https://www.tiktok.com/@ozradio?lang=en"><FaTiktok  /></a></li>
          </ul>

        </footer>
      </div>
    </>
  );
};

export default Footer;
