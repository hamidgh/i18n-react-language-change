import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "./Header";
import PassengerForm from "./PassengerForm";

const HomePage = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    console.log('component did mount');
    // Put any code you want to load on initial component load

    return () => {
      console.log('component will unmount');
      // Put any code you want to load when you are exiting this component
    }
  }, []);

  useEffect(() => {
    console.log('name has changed');
    // Put any code you want to load when property name changes
  }, [name]);

  const handleOnChangeName = (e: any) => {
    setName(e.target.value);
  }

  const handleOnChangeLastname = (e: any) => {
    setLastname(e.target.value);
  }

  const handleOnClick = () => {
    navigate('about', {state: {name, lastname}});
  }

  return (
    <div>
      <Header name={name}/>
      <PassengerForm
        name={name}
        lastname={lastname}
        handleOnChangeName={handleOnChangeName}
        handleOnChangeLastname={ handleOnChangeLastname}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}

export default HomePage;

