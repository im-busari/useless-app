import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Login, SignUp, Calculator } from './pages';
import Navbar from './components/shared/Navbar';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  

  useEffect(() => {
    if (!token && !localStorage.getItem('token')) {
      return navigate("/login");
    }
  }, []);

  return (
    <div>
      { localStorage.getItem('token') && <Navbar /> }
      
        <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tasks" element={<Calculator />} />
          </Routes>
        </div>
        
      
    </div>
  );
}

export default App;
