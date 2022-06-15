import React from "react";
import './styles/header.scss'

const Header = (props: any) => {
  return (
    <h2 className="home-header">Welcome {props.name}</h2>
  );
}

export default Header;