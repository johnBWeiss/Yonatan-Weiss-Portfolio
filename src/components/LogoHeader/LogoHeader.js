import React from 'react';
import './LogoHeader.css';
import threeLines from '../../assets/images/threeLines.png'
import logos from "../../assets/images/logos";

import YCV from '../../assets/Yonatan Full Stack CV.pdf'

import { useNavigate } from 'react-router-dom';


const LogoHeader = () => {
  const { linkedIn, github, mail, info, CV } = logos
  const navigate = useNavigate();

  const navLogin = () => {
    navigate('/')
  }

  return (
    <div className='headerContainer'>
      <div className='headerInnerWidth'>
        <div className='logoContainerHeader'>


          <a
            href='https://bit.ly/3blkAK3'
            // download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              onClick={navLogin}
              src={linkedIn}
              alt="linkedin"
              className='headerLogo'
            />
          </a>
          <a
            href='https://github.com/johnBWeiss'
            // download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              onClick={navLogin}
              src={github}
              alt="github"
              className='headerLogo'
            />
          </a>
          <a
            href={YCV}
            download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              onClick={navLogin}
              src={CV}
              alt="CV"
              className='headerLogo'
            />
          </a>



          {/* <img
            onClick={navLogin}
            src={info}
            alt="info"
            className='headerLogo'
          /> */}




          <a
            href='          mailto:yoniw7@gmail.com
'
            download
          // target="_blank"
          // rel="noreferrer noopener"
          >
            <img
              onClick={navLogin}
              src={mail}
              alt="mail"
              className='headerLogo'
            />
          </a>





        </div>

      </div>
    </div>
  );
};

export default LogoHeader;
