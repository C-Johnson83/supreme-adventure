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
    <div>
      <h1>Welcome to Our Event Registry</h1>
      <p>Make your special occasions memorable with our registry service.<br />Whether it's a wedding, baby shower, or dinner event, find and manage your gifts hassle-free!</p>
      <div className="hero homeHero">
        <div className="overlay"></div>
        {/* <div className="content"></div> */}
      </div>
    </div>
  );
};

export default Home;
