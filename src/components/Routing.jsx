import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './/Home';
import Services from './Services';
import Resume from './Resume';
import Projects from './Projects';
import HireMe from './HireMe';
import Contact from './Contact';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

export default function Routing() {

  
  
  return (
    <BrowserRouter>
        <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}
