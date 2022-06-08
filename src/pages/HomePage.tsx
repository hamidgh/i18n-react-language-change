import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('about');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <Button onClick={handleOnClick} >About</Button>
    </div>
  );
}

export default HomePage;

