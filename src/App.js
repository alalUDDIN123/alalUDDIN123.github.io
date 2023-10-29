import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./components/Preloader/Preloader";
import NavBar from "./components/navbar/navb";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
