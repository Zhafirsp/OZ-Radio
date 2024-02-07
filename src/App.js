import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Broadcaster from "./Components/Broadcaster";
import Program from "./Components/Program";
import Youtube from "./Components/Youtube";
import NavigationBar from "./Components/Navbar";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
    <ScrollToTop smooth color="#FE9E0D"/>
      <NavigationBar />
      <Home />
      <Youtube/>
      <Program />
      <Broadcaster />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
