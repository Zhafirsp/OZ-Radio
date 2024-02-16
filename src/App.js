import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import NavTop from "./Components/NavigationBar/NavbarTop";
import NavBottom from "./Components/NavigationBar/NavbarBottom";
import { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RadioPlayer from "./Components/RadioPlayer";
import Homepages from "./Pages/home/Homepages";
import SinglePage from "./Pages/singlePages/singlePage";
import Culture from "./Components/culture/Culture"
import SinglePageSlider from "./Pages/singlePages/slider/singlePageSlider";
import InterviewPage from "./Pages/interviewPage";
import Youtube from "./Components/Youtube";

function App() {

  useEffect(() => {
    let  lastScrollTop = 0; // This Varibale will store the top position
    const  navbarTop = document.querySelector('.navbar-top'); // Get The NavBar
    const  navbarBottom = document.querySelector('.navbar-bottom');

    window.addEventListener('scroll',function(){
    //on every scroll this funtion will be called
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      //This line will get the location on scroll
      if(scrollTop > lastScrollTop){ //if it will be greater than the previous
        navbarTop.style.top='-80px';
        navbarBottom.style.top='-130px';
    //set the value to the negetive of height of navbar 
      }
      else if( scrollTop == 0) { // Jika scroll ke atas
        navbarTop.style.top = '0'; // Tampilkan kembali navbar-top
        navbarBottom.style.top = '0'; // Tampilkan kembali navbar-bottom
    }
        lastScrollTop = scrollTop;
      });
  })
  return (
    <>
    <div className="App">
    <ScrollToTop smooth color="#FE9E0D"/>
    <div className="navbar-container">
      <NavTop/>
      <NavBottom />
      {/* <SinglePageSlider /> */}
    </div>
    <Routes>
      <Route path="/" element={<Homepages />} />
      <Route path="/about" element={<About />} />
      <Route path="/radio" element={<RadioPlayer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route exact path='/singlepage/:id' component={SinglePage} />
      <Route path="/youtube" element={<Youtube />} />
      <Route exact path='/culture' component={Culture} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
