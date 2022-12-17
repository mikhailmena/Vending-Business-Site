import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import './App.css';
import About from "./Components/About";

import CarouselTemp from './Components/CarouselTemp';
import Header from './Components/Header';
import Contact from "./Components/Contact";



function App() {

  return (
    
      <div>
      <Header/>
        
        <Router className="app">

          <Routes>
            <Route path="/" exact component={CarouselTemp} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
          </Routes>
        </Router>  
      </div>
    
   
  );
}

export default App;
