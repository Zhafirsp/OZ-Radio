import React from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import CardEvent from "./cardEvent";

const Event = () => {
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
    <section style={{ backgroundColor:"#f6f6f6" }} className="event" data-aos="fade-down" >
    <Container>
      <div className="about-section-text-container py-5">
        <Row>
          <Col className="mb-3">
            <h1 className="display-5 fw-bold">
              Upcoming <span style={{ color:"#F49C27" }}>OZ Radio </span> Events + In-Studio Sessions
            </h1>
          </Col>
          <Col lg={2} className="mt-3 button-interview">
          <a href="#"><Button variant="outline-dark ms-5">Load More</Button></a>
          </Col>
        </Row>
      <CardEvent/>
      </div>
    </Container>
    </section>
  );
};

export default Event;
