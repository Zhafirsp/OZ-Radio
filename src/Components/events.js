import React from "react";
import danilla from "../Assets/Img/danilla_interview.jpg"
import rimba from "../Assets/Img/rimba_interview.jpg"
import skastra from "../Assets/Img/skastra_interview.jpg"
import jimijazz from "../Assets/Img/jimijazz_interview.jpg"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";

const Event = () => {
  const programData = [
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
  return (
    <section>
    <Container>
      <div className="about-section-text-container" data-aos="fade-up">
        <Row>
          <Col className="mb-3">
            <h1 className="display-5 fw-bold">
              Upcoming OZ Radio Events + In-Studio Sessions
            </h1>
          </Col>
          <Col lg={2} className="mt-3 button-interview">
          <a href="#"><Button variant="outline-dark">More</Button></a>
          </Col>
        </Row>
        <Row lg={12} md={8} xs={2} className="g-2 slider-row ">
      <Slider {...settings}>
        {programData.map((data) => (
        <Col key={data.image}>
            <Card style={{ margin:'10px' }}>
              <div className="info-boxes-img-container">
                <Card.Img src={data.image} alt="" width={"150px"} />
              </div>
              <Card.Body>
                <Card.Title><h4 className="fw-light">{data.title}</h4></Card.Title>
                <Card.Text><p>{data.text}</p></Card.Text>
                <Card.Text><a href={data.href} target="_blank"><p>{data.link} <BsCollectionPlay/></p></a></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
      </Row>
      </div>
    </Container>
    </section>
  );
};

export default Event;
