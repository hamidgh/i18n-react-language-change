import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const AboutPage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>About Page</h2>
      <Button onClick={handleOnClick} >Home</Button>
    </div>
  );
}

export default AboutPage;