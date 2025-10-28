import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar'; // Assuming Navbar component is imported
import Home from './Home';
import Services from './Services';
import Resume from './Resume';
import Projects from './Projects';
import HireMe from './HireMe';
import Contact from './Contact';
import Stairs from './Stairs'
import ProjectScreen from './ProjectScreen';

function AnimatedRoutes({theme}) {
  const location = useLocation(); // Works because it's inside BrowserRouter

  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
        <div className="stairsCont">
            <Stairs/>
        </div>
        <div style={{marginTop:'70px'}}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <>
            <Home theme={theme}/>
            <Services />
            <Resume />
            <Projects />  
            <Contact />
            </>}/>
          {/* <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects/:id" element={<ProjectScreen />} />
          {/* <Route path="/hire-me" element={<HireMe />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </div>
       
 
    </AnimatePresence>
  );
}



export default AnimatedRoutes;
