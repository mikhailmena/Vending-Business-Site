import React from "react";
import {BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import { Container } from "reactstrap";
import './App.css';
import About from "./Components/About";

import CarouselTemp from './Components/CarouselTemp';
import Contact from "./Components/Contact";
import Header from './Components/Header';



function App() {

  return (
    <div className="app">
      
     <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<CarouselTemp/>}/>
            <Route path="/Vending-Business-Site/" element={<CarouselTemp/>}/>
            <Route path="/About" element={<About/>} /> 
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
