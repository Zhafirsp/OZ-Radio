import React from "react";
import styled from "styled-components";
import SingleVideo from "./singleVideo";
import { Col, Row, Card, Button } from 'react-bootstrap';
import heroImg from '../../Assets/Img/concert.jpg'
import heroImg1 from '../../Assets/Img/concert1.jpg'
import heroImg2 from '../../Assets/Img/concert2.jpg'
import heroImg3 from '../../Assets/Img/concert3.jpg'
import '../../Assets/Css/videos.css'
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const Videos = () => {
  return (
    <>
      <section className='videos mt-4' >
        <p className="text-videos fs-1 fw-bold ms-4">Find out more from Videos</p>
        <Container>
         <SingleVideo videoId="e8EGEW7cCmA" thumbnailUrl={heroImg} />
         <SingleVideo videoId="e8EGEW7cCmA" thumbnailUrl={heroImg1} />
         <SingleVideo videoId="e8EGEW7cCmA" thumbnailUrl={heroImg2} />
        </Container>
        <div className="">
            <Link to="https://www.youtube.com/hashtag/ozclusive" target="_blank">
              <Button 
                variant="outline-dark" 
                className="btn-videos rounded-pill my-5">
                    View All Videos
                </Button>
            </Link>
          </div>
      </section>
    </>
  )
}

export default Videos