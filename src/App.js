import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import ChangePassword from './ChangePassword';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('password'); 
  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} password={password} />} 
        />
        <Route 
          path="/" 
          element={isLoggedIn ? <Home username={username} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/change-password" 
          element={isLoggedIn ? <ChangePassword setPassword={setPassword} currentPassword={password} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
