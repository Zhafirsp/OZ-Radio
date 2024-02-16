import React from "react";
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"
import { Col, Row, Container, Card, Button, ListGroup  } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import '../../Assets/Css/event.css';

const CardEvent = () => {

  return (
    <Container>
        <div class="card_container d-flex">
        <article class="card__article mx-5">
              <div className="card__content">
                <img src={danilla} alt="image" className="card__img" />
                <div className="card__data">
                  <Row>
                    <Col>
                      <span className="card__description">February 21</span>
                    </Col>
                    <Col>
                      <h3 className="card__title fw-bold fs-3"><a href="#">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                      <a href="#" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                    </Col>
                  </Row>
                </div>
              </div>
      
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-5">Feb 23</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-4"><a href="#">DeVotchKa LIVE on OZ (OPEN TO THE PUBLIC)</a></span>
                      <span className="card__button"><a href="#">OZ - GATHERING SPACE</a></span>
                    </Col>
                  </Row>
              </div>
              <hr style={{ color:"#F49C27" }}/>
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-5">Feb 25</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-4"><a href="#">DJ Shadow session on OZ (BROADCAST ONLY)</a></span>
                      <span className="card__button"><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div>
              <hr style={{ color:"#F49C27" }}/>
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-5">Feb 27</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-4"><a href="#">Drinking Boys and Girls Choir Live on OZ (OPEN TO THE PUBLIC)</a></span>
                      <span className="card__button"><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div>
            </article>
            <article class="card__article">
                  <div className="card__content">
                    <img src={rimba} alt="image" width={"1000px"} className="rounded-5"/>
                    <div className="card__data">
                      <span className="card__description">February 20</span>
                      <h2 className="card__title">Black History is Now</h2>
                      <a href="#" className="card__button">Learn More</a>
                    </div>
              </div>
            </article>
          </div>
          <div class="card_container">
          </div>
          </Container>
  );
};

export default CardEvent;
