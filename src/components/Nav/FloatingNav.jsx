import React, { useState } from 'react';
import styled from './floatingNav.module.css'
import {Link} from 'react-router-dom'
import menu from '../../utils/navImg/menu.png'
const FloatingNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const handleMouseEnter = () => {
    setIsNavVisible(true);
  };
  
  const handleMouseLeave = () => {
    setIsNavVisible(false);
  };
  
  return (
    
  
    <div
    className={`${styled.navContainer} ${isNavVisible ? styled.navisible : styled.navhidden}` }
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <nav className={styled.floatingNav}>
        <ul>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to='/about'> About </Link></li>
          <li><Link to='/myFavorite'> My Favorite </Link></li>
          <li><Link to='/allCharacters/1'> Explore    </Link></li>
          <li><Link to='/'> Log out </Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingNav;
