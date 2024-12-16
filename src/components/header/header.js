import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavLinks from '../navbar';
import Profile from './profile';

const Header = () => {

  return (
      <>
        <header>
          <div className="header container">
            <div className="logo">
            <Link to='/home'>
              Logo
            </Link>
            </div>
            <NavLinks/>
            <Profile/>
          </div>
        </header>
      </>
  )
}

export default Header;