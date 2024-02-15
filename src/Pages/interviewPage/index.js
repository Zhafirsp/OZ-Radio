import React from "react";
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"
import skastra from "../../Assets/Img/skastra_interview.jpg"
import jimijazz from "../../Assets/Img/jimijazz_interview.jpg"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import { Parallax, Background } from "react-parallax";
import podcast_2 from '../../Assets/Img/Hero.png'

const InterviewPage = () => {
 
  const interviewPageData = [
    {
      image: danilla,
      title: "JAM MALAM VS DANILLA",
      text: "November, 24 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/4EOTYY5Ery3rpCldBP7VEw?si=ac20028fea384f65",
    },
    {
      image: rimba,
      title: "GET IN THE MOZ Feat. RIMBA",
      text: "October, 24 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/0z3dS498zBkj7iSe7izYuc?si=7e9f251df4754f8d",
    },
    {
      image: skastra,
      title: "JAM MALAM Feat. SKASTRA",
      text: "October, 26 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/7gLCTP7UyqtqhDh4ViDsv7?si=16d76fde0803421a",
    },{
      image: jimijazz,
      title: "JAM MALAM x JIMI JAZZ",
      text: "February, 7 2024",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/7n8tFmDuj1Q3yf9DRCBYIt?si=0f5d75d4421946e3",
    },
  ];

  const settings = {
    className: 'slider-interview',
    infinite: true,
    slidesToShow: 4,
    dots: false,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const styles = {
   width: "100%",
   backgroundSize: "cover",
  };

   return (
    <section>
      <div>
        <Parallax bgImage={podcast_2} strength={500} style={styles}>
          <div style={{ height: 300, textAlign:"center", color:"white" }}>
            <h3 className="mt-5">Time To Listen</h3>
            <hr/>
            <h1 className="fs-bold display-1">Radio <span style={{ color:"#FCBB33" }}> Interviews </span></h1>
            <hr/>
            <p className="">by : OZ RADIO</p>
          </div>
        </Parallax>
      </div>
    <Container>
      <div className="about-section-text-container" data-aos="fade-up">
          <Row lg={8}>
            <iframe 
              style={{ borderRadius:"12px", marginTop:"-175px"}} 
              src="https://open.spotify.com/embed/episode/7c0Id3XQCOaT3KjGbjMsy9?utm_source=generator" 
              width="50%" 
              height="152" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="mb-3"
            >
            </iframe>
          </Row>
          <Row lg={8}>
          <iframe 
              style={{ borderRadius:"12px",}} 
              src="https://open.spotify.com/embed/episode/7c0Id3XQCOaT3KjGbjMsy9?utm_source=generator" 
              width="50%" 
              height="152" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="mb-3"
            >
            </iframe>
          </Row>
      </div>
    </Container>
    </section>
  );
};

export default InterviewPage;
