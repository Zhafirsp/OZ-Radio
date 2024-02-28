import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import NavTop from "./Components/NavigationBar/NavbarTop";
import NavBottom from "./Components/NavigationBar/NavbarBottom";
import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Homepages from "./Pages/home/Homepages";
import SinglePage from "./Pages/singlePages/singlePage";
import Culture from "./Components/culture/Culture"
import SinglePageSlider from "./Pages/singlePages/slider/singlePageSlider";
import InterviewPage from "./Pages/interviewPage";
import Youtube from "./Components/Youtube";
import TV from "./Pages/tvPage/TvPage";
import Video from "./Pages/tvPage/pages/Video";
import EventPages from "./Pages/eventsPage/eventPage";
import EventSinglePage from "./Pages/eventsPage/eventSinglePage/eventSinglePage";
import News from "./Pages/home/News/News";
import RadioPlayer from "./Pages/radioPage/RadioPlayer";
import PlaylistPage from "./Pages/playlistPage";
import PP_Terms from "./Pages/privacyPolicy";

function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {

  useEffect(() => {
    let  lastScrollTop = 0; // This Varibale will store the top position
    const  navbarTop = document.querySelector('.navbar-top'); // Get The NavBar
    const  navbarBottom = document.querySelector('.navbar-bottom');

    window.addEventListener('scroll',function(){
    //on every scroll this funtion will be called
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     const windowHeight = window.innerHeight;
      //This line will get the location on scroll
      if(scrollTop > lastScrollTop && scrollTop > windowHeight / 10){ //if it will be greater than the previous
        navbarTop.style.top='-90px';
        navbarBottom.style.top='-116px';
    //set the value to the negetive of height of navbar 
      }
      else { // Jika scroll ke atas
        navbarTop.style.top = '0';
        navbarBottom.style.top = '0'; 
    }
        lastScrollTop = scrollTop;
      });
  })
  return (
    <>
    <div className="App">
      <ScrollTop/>
      {/* <ScrollToTop smooth color="#FE9E0D"/> */}
    <div className="navbar-container">
      <NavTop/>
      {/* <SinglePageSlider /> */}
    </div>
    <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<About />} />
        <Route path="/radio" element={<RadioPlayer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<EventPages />} />
        <Route path="/single-event" element={<EventSinglePage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route exact path='/singlepage/:id' element={<SinglePage/>} />
        <Route path="/youtube" element={<TV />} />
        <Route path="/news" element={<News />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route exact path='/culture' component={Culture} />
        <Route path="/video/test" element={<Video />} />
        <Route path="/pp_terms" element={<PP_Terms />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
