import React from "react";

const Contact = () => {
  return (
    <section>
    <div className="contact-page-wrapper" id="contact-us" >
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Contact Us</h1>
      <div className="contact-oz">
        <p className="primary-text">103.1 FM OZ Radio Bandung</p>
        <div className="custom-border"></div>
        <p className="primary-text">
          Jl. Setrasari II No.14, Sukarasa<br/>
          Kota Bandung 40152<br/>
          Ph : +62 817 771 031<br/>
          Instagram:
            <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/ozradiobandung/">
                @ozradiobandung
            </a>
          </p>
        </div>
        <div className="contact-oz">
        <p className="primary-text">90.8 FM OZ Radio Jakarta</p>
        <div className="custom-border"></div>
        <p className="primary-text">
          Jl. Bangka Raya No.5 A, Mampang Prpt.<br/>
          Kota Jakarta Selatan 12720<br/>
          Ph : +62 812 101 049 08 <br/>
          Email: jelita@ozradiojakarta.com<br/>
          Instagram:
             <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/ozradiojakarta/">
                @ozradiojakarta
            </a> 
        </p>
        </div> 
        <div className="contact-oz">
        <p className="primary-text">101.2 FM OZ Radio Bali</p>
        <div className="custom-border"></div>
        <p className="primary-text">
          Kompleks Pertokoan Sunset Indah IIB Blok 5<br/>
          Sunset Road Kuta, Bali 80361<br/>
          Ph : +62 813 890 890 12<br/>
          Instagram:
             <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/d_ozradiobali/">
                @d_ozradiobali
            </a> 
          </p>
        </div>
        <div className="contact-oz">
        <p className="primary-text">102.8 FM OZ Radio Aceh</p>
        <div className="custom-border"></div>
        <p className="primary-text">
          Jl. Teuku Iskandar, Lambhuk<br/>
          Ulee Kareng, Aceh 23127<br/>
          Ph : 065 180 107 17<br/>
          Instagram:
             <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/ozradioaceh/">
                @ozradioaceh
            </a> 
          </p>
        </div>
    </div>
    </section>
  );
};

export default Contact;
