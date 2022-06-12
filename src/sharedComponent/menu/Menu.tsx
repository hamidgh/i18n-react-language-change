import React from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu--wrap'>
        <input  className='menu--toggler' type='checkbox' tabIndex={-1}/>
        <div className='menu--hamburger-container'>
          <div className='menu--hamburger-button' />
        </div>
        <div className='menu--items'>
          <div>
            <div>
              <ul className='menu--ul'>
                <li>
                  <Link to={'/'} className='menu--item menu--home-btn'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/about'} className='menu--item menu--download-btn'>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;