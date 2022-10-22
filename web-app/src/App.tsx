// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Calculator } from './pages';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
        {/*  */}
        <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
        
      
    </div>
  );
}

export default App;
