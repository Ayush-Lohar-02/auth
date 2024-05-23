import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = ({ username, setUsername, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to the Homepage</h1>
      <p>Logged in as: {username}</p>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      <br />
      <Link to="/change-password" className="btn btn-primary mt-3">Change Password</Link>
    </div>
  );
};

export default Home;
