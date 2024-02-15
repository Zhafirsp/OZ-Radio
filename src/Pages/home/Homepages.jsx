import React from "react"
import Discover from "./discover/Discover"
// import Hero from "./hero/Hero"
import Homes from "./mainContent/homes/Home"
import Youtube from '../../Components/Youtube';
import Program from '../../Components/Program';
import RadioPlayer from '../../Components/RadioPlayer';
import Hero from '../../Components/Hero';
import SinglePageSlider from "../singlePages/slider/singlePageSlider";
import Interview from "../../Components/interview";
import Event from "../../Components/events";

const Homepages = () => {
  return (
    <>
      <Hero />
      {/* <Hero/> */}
      <Interview />
      <Event/>
      <RadioPlayer />
      <Youtube />
      <Program />
      <Homes />
      <SinglePageSlider />
      {/* <Discover /> */}
    </>
  )
}

export default Homepages
