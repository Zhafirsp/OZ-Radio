// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import Youtube from '../Components/Youtube';
import Program from '../Components/Program';
import RadioPlayer from '../Components/RadioPlayer';
import Hero from '../Components/Hero';



const Home = () => {
  return (
    <>
      <Hero/>
      <RadioPlayer />
      <Youtube />
      <Program />
    </>
  );
};

export default Home;
