import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate('/users');
    }
  }, [navigate]);

  return (
    <>
      <div className="hero homeHero">
        <div className="overlay"></div>
        <div className="homeContent">
          <h1>Welcome to The Three Amigos Event Registry</h1>
        </div>
        <div className="homeContent2">
          <h2>Make your special occasions memorable with our registry service.</h2>
        </div>
        <div className="homeContent3">
          <h3>Whether it's a wedding, baby shower, birthday party, or dinner event, our platform simplifies the process of managing gifts and registries, allowing you to focus on creating unforgettable moments.</h3>
          <h3>Explore a wide range of options, from traditional gifts to experiences, and let your guests contribute in meaningful ways.</h3>
          <h3>Sign up today to start planning your next celebration with ease!</h3>
      </div>
      </div>
    </>
  );
};

export default Home;
