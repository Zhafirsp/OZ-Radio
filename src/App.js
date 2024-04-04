import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import NavTop from "./Components/NavigationBar/NavbarTop";
import NavBottom from "./Components/NavigationBar/NavbarBottom";
import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import About from "./Pages/About";
import SinglePage from "./Pages/singlePages/singlePage";
import SinglePageSlider from "./Pages/singlePages/slider/singlePageSlider";
import InterviewPage from "./Pages/interviewPage";
import Youtube from "./Components/Youtube";
import TV from "./Pages/tvPage/TvPage";
import Video from "./Pages/tvPage/pages/Video";
import EventPages from "./Pages/eventsPage/eventPage";
import EventSinglePage from "./Pages/eventsPage/eventSinglePage/eventSinglePage";
import News from "./Pages/newsPage/News";
import RadioPlayer from "./Pages/radioPage/RadioPlayer";
import PlaylistPage from "./Pages/playlistPage";
import PP_Terms from "./Pages/privacyPolicy";
import Home from "./Pages/Homepages";
import Search from "./Pages/Search";
import Comingsoon from "./Pages/Comingsoon";
import Jobs from "./Pages/job/App";
import JobsPage from "./Pages/job/pages/JobsPage";
import AddJobPage from "./Pages/job/pages/AddJobPage";
import EditJobPage from "./Pages/job/pages/EditJobPage";
import JobPage, { jobLoader } from "./Pages/job/pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AddNews from "./Pages/admin/newsPage/add";
import EditNews from "./Pages/admin/newsPage/edit";
import NavAdmin from "./Components/NavigationBar/NavbarAdmin";
import { BiSolidArrowToTop } from "react-icons/bi";
import ListNews from "./Pages/admin/newsPage";
import Unauthorized from "./Components/Unauthorized";

function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const LayoutWithFooter = ({ children }) => (
      <>
        <ScrollTop />
        <div className="navbar-container">
          <NavTop />
          {/* <NavAdmin/> */}
        </div>
        {children}
        <Footer />
      </>
    );
  const LayoutWithoutFooter = ({ children }) => <>{children}</>;

  function useScrollEffect() {
    useEffect(() => {
      let lastScrollTop = 0;
      const navbarTop = document.querySelector('.navbar-top');
      const navbarBottom = document.querySelector('.navbar-bottom');
      const searchButton2 = document.querySelector('.search__icon2');
      const logoButton = document.querySelector('.logo_bottom');
  
      if (navbarTop && navbarBottom && searchButton2 && logoButton) {
        searchButton2.classList.remove('showsearch');
        logoButton.classList.remove('showlogo');
  
        window.addEventListener('scroll', function () {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
  
          if (scrollTop > lastScrollTop && scrollTop > windowHeight / 10) {
            navbarTop.style.top = "-110px";
            navbarBottom.style.top = "-140px";
            searchButton2.classList.add("showsearch");
            logoButton.classList.add("showlogo");
          } else {
            navbarTop.style.top = "0";
            navbarBottom.style.top = "0";
            searchButton2.classList.remove("showsearch");
            logoButton.classList.remove("showlogo");
          }
          lastScrollTop = scrollTop;
        });
      }
    }, []);
  }
  
  function App() {
    useScrollEffect();
  return (
    <>
    
    <div className="App">
      <ScrollToTop smooth className="scroll_to_top"/>
    <div className="navbar-container"></div>
    <Routes>
        <Route path="/" element={<LayoutWithFooter><Home /></LayoutWithFooter>} />
        <Route path="/about" element={<LayoutWithFooter><About /></LayoutWithFooter>} />
        <Route path="/search" element={<LayoutWithFooter><Search /></LayoutWithFooter>} />
        <Route path="/radio" element={<LayoutWithFooter><RadioPlayer /></LayoutWithFooter>} />
        <Route path="/contact" element={<LayoutWithFooter><Contact /></LayoutWithFooter>} />
        <Route path="/event" element={<LayoutWithFooter><EventPages /></LayoutWithFooter>} />
        <Route path="/single-event" element={<LayoutWithFooter><EventSinglePage /></LayoutWithFooter>} />
        <Route path="/interview" element={<LayoutWithFooter><InterviewPage /></LayoutWithFooter>} />
        <Route exact path='/news/:newsId' element={<LayoutWithFooter><SinglePage/></LayoutWithFooter>} />
        <Route path="/youtube" element={<LayoutWithFooter><TV /></LayoutWithFooter>} />
        <Route path="/news" element={<LayoutWithFooter><News /></LayoutWithFooter>} />
        <Route path="/playlist" element={<LayoutWithFooter><PlaylistPage /></LayoutWithFooter>} />
        <Route path="/video/test" element={<LayoutWithFooter><Video /></LayoutWithFooter>} />
        <Route path="/pp_terms" element={<LayoutWithFooter><PP_Terms /></LayoutWithFooter>} />
        {/* <Route path="/login" element={<LayoutWithFooter><Login/></LayoutWithFooter>} />
        <Route path="/register" element={<LayoutWithFooter><Register/></LayoutWithFooter>} />
        <Route path="/data-news" element={<LayoutWithFooter><ListNews/></LayoutWithFooter>} />
        <Route path="/data-news/add-news" element={<LayoutWithFooter><AddNews/></LayoutWithFooter>} />
        <Route exact path="/data-news/edit-news" element={<LayoutWithFooter><EditNews/></LayoutWithFooter>} />
        <Route path='/add-admin' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-admin/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/admin/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        /> */}
        <Route path='*' element={<NotFoundPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route
            path="/comingsoon"
            element={
              <LayoutWithoutFooter>
                <Comingsoon />
              </LayoutWithoutFooter>
            }
          />
      </Routes>
    </div>
    </>
  );
}

export default App;
