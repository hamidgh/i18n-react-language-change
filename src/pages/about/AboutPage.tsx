import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

const AboutPage = () => {
  const location: any = useLocation();
  let navigate = useNavigate();

  const handleOnContactUsClick = () => {
    navigate('/contact');
  }

  return (
    <div>
      <p>Thank you <b>{location.state.name} {location.state.lastname} </b>, you have successfully submitted the form</p>
      <Button className="contact-us-btn" onClick={handleOnContactUsClick} >Contact Us</Button>
    </div>
  );
}

export default AboutPage;