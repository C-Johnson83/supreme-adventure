import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate('/users');
    }
  }, [navigate]);

  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <div className="homeContent">
          <h1>Welcome to The Three Amigos Event Registry</h1>
        </div>
        <div className="homeContent2">
          <h2>Make your special occasions memorable with our registry service.</h2>
        </div>
        <div className="homeContent3">
          <h3>Whether it's a wedding, baby shower, birthday party, or dinner event, our platform simplifies the process of managing gifts and registries, allowing you to focus on creating unforgettable moments.</h3>
          </div>
        <div className="homeContent4">
          <h4>Sign up today to start planning your next celebration with ease!</h4>
        </div>

<div className="cardContainer home1" >
          <Card  className="homeCard" >
            <Card.Body style={{ backgroundImage: `url('https://img.freepik.com/free-photo/golden-wedding-rings-white-rose-from-wedding-bouquet_8353-10467.jpg?t=st=1709141385~exp=1709144985~hmac=9ccd2f0578a56bc2076e9d2df0464bb8e2e026a3fa07a680bb09319cd797779f&w=1380')`, backgroundSize: 'cover' }}>
              <Card.Text>
              <Card.Text>{Array(40).fill('\u00A0').join('')}</Card.Text>
              </Card.Text>
            </Card.Body>
              <Card.Subtitle>Image made by freepik</Card.Subtitle>                                                                                                                                                      
          </Card>
          </div>

<div className="cardContainer home2" >
          <Card className="homeCard">
            <Card.Body  style={{ color: 'white',backgroundImage: `url('https://img.freepik.com/free-vector/flat-golden-circle-balloons-birthday-background_52683-34659.jpg?t=st=1709141749~exp=1709145349~hmac=517567cb82bd3b10cbdd3df137c730d048324367344d4f9359d588d7125b676b&w=1380')`, backgroundSize: 'cover' }}>
              <Card.Text>{Array(40).fill('\u00A0').join('')}</Card.Text>
            </Card.Body>
            <Card.Subtitle>Image made by freepik</Card.Subtitle>
          </Card>
          </div>
                

<div className="cardContainer home3" >
          <Card className="homeCard" >
            <Card.Body style={{ backgroundImage: `url('https://img.freepik.com/free-vector/watercolor-baby-stuff-collection_52683-74195.jpg?t=st=1709141940~exp=1709145540~hmac=37ed511534929747bfe73f76ba7e96e122e9e44b42ca6fa7ebbe0ce812e19676&w=826')`, backgroundSize: 'cover' }}>
              <Card.Text>
              <Card.Text>{Array(30).fill('\u00A0').join('')}</Card.Text>
              </Card.Text>
            </Card.Body>
              <Card.Subtitle>Image made by freepik</Card.Subtitle>    
          </Card>
        </div>
        </div>
    </>
  );
};

export default Home;
