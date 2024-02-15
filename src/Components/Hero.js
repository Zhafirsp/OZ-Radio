import React, { useState } from "react";
import '../Assets/Css/hero.css';
import heroImg from '../Assets/Img/concert.jpg'

const Hero = () => {

  return (
    <>
      <section className='hero' data-aos="fade-down" >
        {/* Latar belakang blur */}
        <div className="hero-background" style={{ backgroundImage: `url(${heroImg})` }}></div>

        {/* Konten utama */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <span className="span-hero fs-2">February 25, 2024</span>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on OZ Jakarta!</h1>
            <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
            <p className="lead fw-lighter">Join our special music event on February 25, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Hero