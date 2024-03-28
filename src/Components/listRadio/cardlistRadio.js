import React from "react";
import { Link } from "react-router-dom";
import danilla from "../../Assets/Img/danilla_interview.jpg";
import rimba from "../../Assets/Img/rimba_interview.jpg";
import { Col, Row } from "react-bootstrap";

const CardlistRadio = () => {

  const RadioData = [
    {
      image: danilla,
      title: "Devana Kinta",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque velit nibh, ac gravida nulla ullamcorper eget. Nulla sit amet tincidunt justo, at volutpat tellus. Donec et accumsan magna. Integer gravida semper sapien, eu imperdiet nisi tempus ac. Aenean libero arcu, semper non neque vehicula, tristique tincidunt lorem. Aliquam eleifend quis eros sed condimentum. Mauris accumsan vestibulum metus, ut tincidunt eros dictum at. Ut aliquet sed ipsum laoreet maximus. Quisque sagittis orci nisi, at placerat enim maximus sed. Quisque consectetur eu ante et vehicula. Phasellus non imperdiet magna. Maecenas ut hendrerit mauris."
    },
    {
      image: rimba,
      title: "Billa Darima",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque velit nibh, ac gravida nulla ullamcorper eget. Nulla sit amet tincidunt justo, at volutpat tellus. Donec et accumsan magna. Integer gravida semper sapien, eu imperdiet nisi tempus ac. Aenean libero arcu, semper non neque vehicula, tristique tincidunt lorem. Aliquam eleifend quis eros sed condimentum. Mauris accumsan vestibulum metus, ut tincidunt eros dictum at. Ut aliquet sed ipsum laoreet maximus. Quisque sagittis orci nisi, at placerat enim maximus sed. Quisque consectetur eu ante et vehicula. Phasellus non imperdiet magna. Maecenas ut hendrerit mauris."
    },
  ];

  return (
    <>
      <section className="cardlist-radio">
        <div className="container-fluid">
                {RadioData.map((data,index) => (
                  // <div className="">
                      <Row className="g-5 mb-5">
                      <Col lg={2} md={12} sm={12} className="">
                        <img 
                        src={data.image} 
                        width={300}
                        height="auto"
                        alt="" 
                        loading="lazy" 
                        className="d-block mx-auto img-fluid ms-4" 
                        />
                    </Col>
                    <Col lg={10} md={12} sm={12}>
                          <div className="text-news">
                            <Link><h3 className="fw-bold">{data.title}</h3></Link>
                            <p>{data.paragraph}</p>
                          </div>
                      </Col>
                </Row>
                    // </div>
                ))}
        </div>
      </section>
    </>
  );
};

export default CardlistRadio;
