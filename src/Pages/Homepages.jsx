import React, { lazy } from "react"
import { Container } from "react-bootstrap";
import Hero from '../Components/Hero';
import Interview from '../Components/interview';
import Event from '../Components/event/events';
import Logo from '../Components/Logo';
import Videos from "../Components/Videos/Videos";

const Home = () => {
  return (
    <>
    <Container fluid>
        <Hero />
        <Interview />
        <Event/>
        {/* <Logo /> */}
        <Videos />
      </Container>
    </>
  )
}

export default Home
