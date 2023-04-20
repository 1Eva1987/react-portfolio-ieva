import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WrapperProjects from "./components/WrapperProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<WrapperProjects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
