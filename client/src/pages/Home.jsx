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
        <div className="content">  
          <div>
            <h1>Welcome to The Three Amigos Event Registry</h1>
            </div>
          <p>Make your special occasions memorable with our registry service.</p>
          <p>Whether it's a wedding, baby shower, birthday party, or dinner event, our platform simplifies the process of managing gifts and registries, allowing you to focus on creating unforgettable moments.</p>
          <p>Explore a wide range of options, from traditional gifts to experiences, and let your guests contribute in meaningful ways.</p>
          <p>Sign up today to start planning your next celebration with ease!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
