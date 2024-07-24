import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer.jsx';
import './responssive.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CharaterAnimation" element={<Gallery type="CharaterAnimation" />} />
          <Route path="/Elearning" element={<Gallery type="Elearning" />} />
          <Route path="/Animation" element={<Gallery type="Animation" />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
