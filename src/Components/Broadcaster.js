import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { Carousel } from 'react-bootstrap';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok   } from "react-icons/fa";
import AOS from 'aos';
import BannerBackground from "../Assets/bg1.png";
import BannerBackground2 from "../Assets/bg2.png";
AOS.init();


const Broadcaster = () => {
  const casterData = [
    {
      image: ProfilePic,
      title: "John Doe",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
    {
      image: ProfilePic,
      title: "John Dier",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
    {
      image: ProfilePic,
      title: "John Fast",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
  ];

  return (
      <section>
    <div className="work-section-wrapper" id="broadcaster" data-aos="fade-up">
      <div className="work-section-top">
        <div className="broadcast-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="broadcast2-bannerImage-container">
          <img src={BannerBackground2} alt="" />
        </div>
        <h1 className="primary-heading">Broadcaster</h1>
      </div>
      <Carousel>
        {casterData.map((data, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-section-bottom d-flex">
              <div className="work-section-info" key={data.image}>
                <img src={data.image} alt="" />
                <h2>{data.title}</h2>
                <div className="testimonials-stars-container">
                  {data.socialMedia.map((social, i) => (
                    <a key={i} href={social.link} className="text-reset">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </section>
  );
};

export default Broadcaster;
