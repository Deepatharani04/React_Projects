import React from "react";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Certificates from "./Portfolio/Certificates";
import '../src/Portfolio.css';

function App(){
  return(
    <>
    <div className="whole-screen">
      <Home/>
      <About/>
      <Certificates/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
