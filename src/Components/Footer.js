import React from "react";
import Logo from "../Assets/Logo.png";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok   } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FE9E0D" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
     <div className="footer-wrapper">
      <div className="footer-section-one">
        <h1>
          Visit Us
        </h1>
        <h5><a href="https://ozradiojakarta.com/" className="text-decoration-none">Jakarta</a></h5>
        <h5><a href="https://bandung.ozradio.id/"  className="text-decoration-none">Bandung</a></h5>
        <h5><a href="#"  className="text-decoration-none">Bali</a></h5>
        <h5><a href="#"  className="text-decoration-none">Aceh</a></h5>
       </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <h1 className="text-start">advertise with us</h1>
        <h5>phone: +6281210104908</h5>
        <h5>email: info@ozradiojakarta.com</h5>
        <div className="footer-icons">
            <a href="https://www.instagram.com/ozradiobandung/"><BsInstagram /></a>
            <a href="https://twitter.com/ozradiobandung?s=20"><BsTwitter /></a>
            <a href="https://www.youtube.com/@OZRADIO"><BsYoutube /></a>
            <a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff"><FaSpotify /></a>
            <a href="https://www.facebook.com/ozradiobandung"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@ozradio?lang=en"><FaTiktok  /></a>
        </div>
        </div>
      </div>
      <div className="footer-section-three">
        <div className="footer-section-columns">
        <img src={Logo} alt="" className="footer-logo" />
          <p className="ps-3">The manifestation of Creative Idea to accompany you<br/> on a daily basis as your friendly station.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
