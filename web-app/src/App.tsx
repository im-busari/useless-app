// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Calculator } from './pages';
import Navbar from './components/shared/Navbar';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div>
      <Navbar />
        {/*  */}
        <div className="container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tasks" element={<Calculator />} />
          </Routes>
        </div>
        
      
    </div>
  );
}

export default App;
