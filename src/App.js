import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Components/Nav'
import Home from './Page/Home';
import Calculator from './Page/Calculator';
import About from './Page/About';
function App() {
  
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/calculator" element={<Calculator/>}/>
      </Routes>
      {/*<footer className="shadow-lg text-center text-white">
          <h3 className="py-3 h4">Ewebajo Oluwaseyi</h3>
  </footer>*/}
    </Router>
  );
}

export default App;
