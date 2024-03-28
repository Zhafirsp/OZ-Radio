import React from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import CardEvent from "./cardEvent";
import '../../Assets/Css/event.css'
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <section style={{ backgroundColor:"#f6f6f6" }} className="event" data-aos="fade-down" >
    <Container>
      <div className="about-section-text-container py-5">
          <div className="mb-3">
            <h1 className="display-5 fw-bold">
              Upcoming <span style={{ color:"#F49C27" }}>OZ Radio </span> Events + In-Studio Sessions
            </h1>
          </div>
      <CardEvent/>
          <div className="mt-3 button-interview mx-auto">
          <Link to="/event">
            <Button variant="outline-dark btn-event rounded-pill py-2">More OZ Events</Button>
            </Link>
          </div>
      </div>
    </Container>
    </section>
  );
};

export default Event;
