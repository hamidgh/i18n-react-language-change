import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Menu from "../../sharedComponent/menu/Menu";

const HomePage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('about');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <Menu/>
      <Button onClick={handleOnClick} >About</Button>
    </div>
  );
}

export default HomePage;

