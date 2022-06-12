import React from 'react';
import {Link} from "react-router-dom";
import './Menu2.scss';

const Menu2 = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox"/>
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li><Link to={'/'} className='menu--item menu--home-btn'> Home</Link></li>
        <li><Link to={'/about'} className='menu--item menu--download-btn'>About</Link></li>
      </ul>
    </div>
  );
}

export default Menu2;