import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
