import React from 'react';
import './LogoHeader.css';
import threeLines from '../../assets/images/threeLines.png'
import logos from "../../assets/images/logos";

import { useNavigate } from 'react-router-dom';


const LogoHeader = () => {
  const { linkedIn, github, mail } = logos
  const navigate = useNavigate();

  const navLogin = () => {
    navigate('/')
  }

  return (
    <div className='headerContainer'>
      <div className='headerInnerWidth'>
        <div className='logoContainerHeader'>
          <img
            onClick={navLogin}
            src={linkedIn}
            alt="logo"
            className='headerLogo'
          />
          <img
            onClick={navLogin}
            src={github}
            alt="logo"
            className='headerLogo'
          />   <img
            onClick={navLogin}
            src={mail}
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
