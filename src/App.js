import "./App.css";
import Home from "./Components/Home";
import About from "./Components/Youtube";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Broadcaster from "./Components/Broadcaster";
import Program from "./Components/Program";
import Youtube from "./Components/Youtube";
import NavigationBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
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
