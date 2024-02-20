import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import logo_img from '../Assets/Img/Logo.png';
import "../Assets/Css/logo_definition.css"
import Typed from 'typed.js';


const Logo = () => {
  
  useEffect(() => {
    // Dapatkan elemen DOM dengan menggunakan document.querySelector
    const element = document.querySelector('.auto-type');

    // Buat instansi Typed.js dengan elemen DOM yang telah didapatkan
    var typed = new Typed(element, {
      strings: ["Delivering music we do ...", "in style"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    // Return function cleanup
    return () => {
      // Hentikan Typed.js saat komponen dibongkar
      typed.destroy();
    };
  }, []); // Gunakan array kosong sebagai dependensi untuk useEffect agar efeknya hanya terjadi sekali


  return (
    <section className="section-logo">
      <Container>
        <div className="logo_definition mt-5" data-aos="fade-up">
          <div className="d-flex ">
            <img 
            src={logo_img} 
            className="img-fluid img-logo" 
            loading="lazy" 
            />
            {/* <div className="scroller">
              <span>
              Delivering <br/> 
              music <br/> 
              we do <br/> 
              in style <br/> 
              </span>
            </div> */}
            {/* <h1 className="mx-3 mt-4">Delivering music we do... in style</h1> */}
            <h1 className="mx-3 mt-4"><span className="auto-type"></span></h1>
          </div>
        </div>
        <div class="logo_nav">
            <ul class="nav justify-content-center fw-bold fs-4">
              <li><a href="/about" class="nav-link px-5">ABOUT</a></li>
              <li><a href="#" class="nav-link px-5 ">PRIVACY POLICY/TERMS</a></li>
              <li><a href="/contact" class="nav-link">CONTACT</a></li>
            </ul>
        </div>
      </Container>
    </section>
  );
};

export default Logo;
