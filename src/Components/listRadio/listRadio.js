import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import CardEvent from "./cardlistRadio";
import "../../Assets/Css/list_radio.css";
import { Link } from "react-router-dom";
import CardlistRadio from "./cardlistRadio";

const ListRadio = () => {
  return (
    <>
      <section className="list-Radio py-4" style={{ backgroundColor:"#f6f6f6" }} data-aos="fade-down">
        <div className="container-fluid">
          <h1 className="header-radio display-5 fw-bolder ms-3 pt-5">Listen to the <span style={{ color:"#F49C27" }}>OZ Radio</span></h1>
        </div>
        <br/>
        {/* <hr /> */}
        <Row className="row">
          <Col>
          <ul className="nav category-radio d-flex fw-normal fs-3 ms-4">
                  <li><Link to="/about" className="ms-2 me-5 border-bottom border-2 border-black">Streaming Archive</Link></li>
                  <li><Link to="/" className="me-5 border-bottom border-2 border-black">Podcast 01</Link></li>
                  <li><Link to="/" className="me-5 border-bottom border-2 border-black">Podcast 02</Link></li>
                  <li><Link to="/contact" className="border-bottom border-2 border-black">Podcast 03</Link></li>
                </ul>
          </Col>
        </Row>
        <CardlistRadio/>
        <div className="mx-4">
          <iframe className="embed-radio" width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fkexp%2Fkexp-presents-six-degrees-of-dolly-parton-the-midday-show-04-22-22%2F" ></iframe>
          <iframe className="embed-radio" width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fkexp%2Fto-all-the-girls%2F"></iframe>
          <iframe className="embed-radio" width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fkexp%2Fkexp-presents-midnight-in-a-perfect-world-with-moderat%2F"></iframe>
        </div>
      </section>
    </>
  );
};

export default ListRadio;
