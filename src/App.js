import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Introduction from './Introduction';
import Home from './Home';
import Contact from './Contact';
import Sidebar from './Sidebar';
import Objective from './Objective';
import Experiments from './Experiments';
import Audience from './Audience';
import Course from './Course';
import Feedback from './Feedback';

// Import other components

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/intro' element={<Introduction/>} />
      <Route path='/objective' element={<Objective/>} />
      <Route path='/experiments' element={<Experiments/>} />
      <Route path='/audience' element={<Audience/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/feedback' element={<Feedback/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}





export default App;
