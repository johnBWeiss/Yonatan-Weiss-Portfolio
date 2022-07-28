import React from 'react';
import './LogoHeader.css';
import threeLines from '../../assets/images/threeLines.png'
import logo from '../../assets/images/logos/2.jpg'

import { useNavigate } from 'react-router-dom';


const LogoHeader = () => {

  const navigate = useNavigate();

  const navLogin = () => {
    navigate('/')
  }

  return (
    <div className='headerContainer'>
      <div className='headerInnerWidth'>
        <div className='workshopHeader'>
          <img
            onClick={navLogin}
            src={logo}
            alt="logo"
            className='headerLogo'
          />
          <img
            onClick={navLogin}
            src={logo}
            alt="logo"
            className='headerLogo'
          />   <img
            onClick={navLogin}
            src={logo}
            alt="logo"
            className='headerLogo'
          />
        </div>
        {/* <img
          src={threeLines}
          alt="threeLines"
          className='threeLines'
        /> */}
      </div>
    </div>
  );
};

export default LogoHeader;
