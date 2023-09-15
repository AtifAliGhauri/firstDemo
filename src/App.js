import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import Videos from "./components/pages/Videos";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";
import About from "./components/pages/About";
import RangeBySeating10 from "./components/pages/RangeBySeating10";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/videos' element={<Videos />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/rangeby10' element={<RangeBySeating10 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

    
  );
}

export default App;
