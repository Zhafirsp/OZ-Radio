import React, { lazy } from "react"
import Head from "../Components/common/header/Head";
import { Container } from "react-bootstrap";

const Hero = lazy(() => import ('../Components/Hero'));
const Interview = lazy(() => import ("../Components/event/events"));
const Event = lazy(() => import ('../Components/event/events'));
const Logo = lazy(() => import ('../Components/Logo'));
const Home = () => {
  return (
    <>
    <Container fluid>
        <Hero />
        <Interview />
        <Head />
        <Event/>
        <Head />
        <Logo />
      </Container>
    </>
  )
}

export default Home
