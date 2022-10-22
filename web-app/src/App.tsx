// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Calculator } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calculator" element={<Calculator />} />
        
      </Routes>
    </div>
  );
}

export default App;
