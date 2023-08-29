import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import Support from "./components/pages/Support";
import Videos from "./components/pages/Videos";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Navbar />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/support' element={<Support />} />
          <Route exact path='/videos' element={<Videos />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

    
  );
}

export default App;
