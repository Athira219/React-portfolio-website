import React from 'react';
import './App.css';
import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
    </>
  );
}

export default App;
