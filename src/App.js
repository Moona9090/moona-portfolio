import React from "react";
import "./App.css"
import { HashRouter as Router ,Routes,Route } from "react-router-dom";
import Header from "./Componants/Header";
import Home from "./Componants/Home";
import Skills from "./Componants/Skills";
import Projects from "./Componants/Projects";
import Footer from "./Componants/Footer";
import Contact from "./Componants/Contact";

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Routes>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/skills" element={ <Skills/> }/>
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/Contact" element={ <Contact/> }/>
      </Routes>
    </Router>
  );
}

export default App;
