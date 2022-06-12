import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Menu2 from "../../sharedComponent/menu/Menu2";

const AboutPage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>About Page</h2>
      <Menu2/>
      <Button onClick={handleOnClick} >Home</Button>
    </div>
  );
}

export default AboutPage;