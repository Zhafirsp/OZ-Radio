import React from "react"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import CardEvent from "../../Components/event/cardEvent";
import satine from '../../Assets/Img/satine_interview.jpg'
import '../eventsPage/evenPage.css'
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"

const EventPages = () => {
  return (
    <div className="eventPage">
      <div className="about-section-text-container py-5 event-header">
        <h1 className="display-5 fw-bold text-center">
            Upcoming <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span> Events
        </h1>
      </div>
    <section style={{ backgroundColor:"#f6f6f6" }} className="event"  data-aos="fade-right">
    <Container>
      <div className="about-section-text-container py-5">
        <div class="card_container d-flex">
        <article class="card__article mx-5 d-flex">
              <div className="card__content">
                <img src={danilla} alt="image" width={"500px"} className="mx-5" />
                <div className="card__data">
                      <span className="card__description">February 21</span>
                      <h3 className="card__title fw-bold fs-5"><a href="/single-event">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                      <a href="/single-event" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                 </div>
              </div>
                  <div className="card__content">
                    <img src={rimba} alt="image" width={"500px"} className="mx-5"/>
                    <div className="card__data">
                      <span className="card__description">February 20</span>
                      <h2 className="card__title fw-bold fs-5">Black History is Now</h2>
                      <a href="#" className="card__button">Learn More</a>
                    </div>
                  </div>
            </article>
          </div>
      </div>
    </Container>
    </section>
      <div className="about-section-text-container py-5" style={{ marginTop:"-10px" }} data-aos="fade-left">
        <Row>
          <Col className="mb-3">
            <h1 className="display-5 fw-bold text-center">
              <span style={{ color:"#F49C27" }} className="home-oz">MoPOP's 2024 </span> Sound Off! Showcase
            </h1>
          </Col>
        </Row>
        <Row>
          <div className="event_content d-flex">
                <img src={satine} alt="image" width={"300px"} className="img-fluid"/>
              <Col className="mb-3">
              <p className="ms-5">
              MoPOP’s Sound Off! Showcase is your chance to witness the next big thing in NW music as young artists from around the region take to the Sky Church stage for three nights of heart, guts, and glory.
              <br/>
              <br/>
              As a legacy under-21 music showcase in the Pacific Northwest, MoPOP’s Sound Off! connects young artists with the tools and resources to dig into their sound, grow their business skills, and level up their artistry. Participants receive professional mentoring to guide them through the ins and outs of the industry, gathering insider knowledge, valuable community contacts, and life-changing experience as they gear up to show the world exactly what they have to say. Then they unleash it all with a fully realized live performance at our world-class venue, complete with light show, tech crew, and hordes of screaming fans.
              </p>
              <Button variant="dark" className="text-center start-50 position-relative py-2 px-4 border border-secondary rounded-pill fs-5">Get Tickets Now</Button>
            </Col>
          </div>
          </Row>
          <Container>
          <table class="table table-borderless table-hover table-responsive table-event my-5">
            <thead>
              <tr>
                <th scope="col" className="text-secondary">FEBRUARY 20TH</th>
                <th scope="col" className="text-secondary">FEBRUARY 24TH</th>
                <th scope="col" className="text-secondary">MARCH 2ND</th>
              </tr>
            </thead>
            <tbody className="fs-5">
              <tr>
                <td scope="row">Lucia Flores-Wiseman</td>
                <td>Sophia Shoshana</td>
                <td>Rae</td>
              </tr>
              <tr>
                <td scope="row">The Rat Utopia Experiment</td>
                <td>Joint Souls</td>
                <td>miacompactdisk</td>
              </tr>
              <tr>
                <td scope="row">LCN!</td>
                <td>Smooth Sailing</td>
                <td>King Zaae</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td>Brannon Warn-Johnston</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </Container>
          <section style={{ backgroundColor:"#f6f6f6" }} data-aos="fade-down" >
            <Container>
              <div className="my-5">
                <Row>
                  <Col className="mb-3">
                    <h1 className="display-5 fw-bold text-center">
                      Upcoming <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span> Events
                    </h1>
                  </Col>
                </Row>
                <article class="card__article mx-5">
              <div className="card__content">
                <img src={danilla} alt="image" className="event_img img-fluid" />
                <div className="card__data">
                  <Row>
                      <span className="card__description">February 21</span>
                      <h3 className="card__title fw-bold fs-5"><a href="/single-event">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                      <a href="/single-event" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                  </Row>
                </div>
              </div>
      
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-6">Feb 23</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-5 mt-3"><a href="#">DeVotchKa LIVE on OZ (OPEN TO THE PUBLIC)</a></span>
                      <span className="card__button"><a href="#">OZ - GATHERING SPACE</a></span>
                    </Col>
                  </Row>
              </div>
              <hr style={{ color:"#F49C27" }}/>
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-6">Feb 25</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-5"><a href="#">DJ Shadow session on OZ (BROADCAST ONLY)</a></span>
                      <span className="card__button"><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div>
              <hr style={{ color:"#F49C27" }}/>
              <div class="mx-1">
                <Row>
                    <Col sm={2}>
                      <span className="card__description fw-lighter primary-text text-center fs-6">Feb 27</span>
                    </Col>
                    <Col>
                      <span className="card__description fs-5"><a href="#">Drinking Boys and Girls Choir Live on OZ (OPEN TO THE PUBLIC)</a></span>
                      <span className="card__button"><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div>
            </article>
              </div>
            </Container>
            </section>
      </div>
    </div>
  )
}

export default EventPages
