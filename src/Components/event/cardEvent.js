import React from "react";
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"
import { Col, Row, Container, Card, Button, ListGroup  } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import '../../Assets/Css/event.css';

const CardEvent = () => {

  return (
        <div className="card_container">
        <article className="card__article py-5">
          <Row className=" flex-row-reverse g-5">
            <Col lg={7} md={12} sm={12} className="card__content">
                    <img src={rimba} alt="image" className="rimba-img img-fluid mx-auto d-block"/>
                    <div className="card__data">
                      <span className="card__description">April 20</span>
                      <h2 className="card__title fw-bold fs-5">Black History is Now</h2>
                      <a href="#" className="card__button">Learn More</a>
                    </div>
              </Col>
            <Col lg={5} md={12} sm={12} className="card__content">
                <img src={danilla} alt="image" className="danilla-img img-fluid mx-auto d-block" />
                <div className="card__data">
                      <span className="card__description">April 21</span>
                      <h3 className="fw-bold fs-5"><a href="/single-event" className="card__title">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                      <a href="/single-event" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                </div>
                <div className="mt-5">
                <Row>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6 ">April<br/>23</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5 mt-3"><a href="#">DeVotchKa LIVE on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - GATHERING SPACE</a></span>
                    </Col>
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>25</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">DJ Shadow session on OZ (BROADCAST ONLY)</a></span>
                      <br/>
                      <span className=""><a href="#"> OZ - STUDIO (NW ROOMS)</a></span>
                    </Col >
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>27</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">Drinking Boys and Girls Choir Live on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
              </div>
              </Col>
            </Row>
          </article>
          {/* <div className="col-md-6 mt-5">
                <Row>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6 ">April<br/>23</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5 mt-3"><a href="#">DeVotchKa LIVE on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - GATHERING SPACE</a></span>
                    </Col>
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>25</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">DJ Shadow session on OZ (BROADCAST ONLY)</a></span>
                      <br/>
                      <span className=""><a href="#"> OZ - STUDIO (NW ROOMS)</a></span>
                    </Col >
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>27</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">Drinking Boys and Girls Choir Live on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div> */}
          </div>
  );
};

export default CardEvent;
