import React, { useState } from "react";
import '../Assets/Css/hero.css';
import heroImg from '../Assets/Img/concert.jpg'
import { Parallax, Background } from "react-parallax";

const Hero = () => {

  const styles = {
    width: "100%",
    backgroundSize: "cover", 
    height: '100%'
   };

  return (
    <>
      <section className='hero' data-aos="fade-down" >
        {/* Latar belakang blur */}
        {/* <div className="hero-background" style={{ backgroundImage: `url(${heroImg})` }}></div> */}
        <Parallax bgImage={heroImg} strength={500} style={styles} blur={10}>
        {/* Konten utama */}
          <div className="container col-xxl-8 px-4 py-5" style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <span className="span-hero fs-2">February 25, 2024</span>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">OZ Jakarta </span></h1>
                <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
                <p className="lead fw-lighter">Join our special music event on February 25, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg} className="hero-img d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  )
}

export default Hero