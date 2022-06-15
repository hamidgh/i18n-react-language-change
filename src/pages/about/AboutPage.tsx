import React from 'react';
import {useLocation} from 'react-router-dom';

const AboutPage = () => {
  const location: any = useLocation();

  return (
    <div>
      <p>Thank you <b>{location.state.name} {location.state.lastname} </b>, you have successfully submitted the form</p>
    </div>
  );
}

export default AboutPage;