import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About'
import Gallery from './components/Pages/Gallery/Gallery';
import Services from './components/Pages/Services/Services';
import Contact from './components/Pages/Contact/Contact';
import TaxiForm from './components/TaxiForm/TaxiForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path="/book-now" element={<TaxiForm/>} /> 

      </Routes>
    </Router>
  );
}

export default App;
