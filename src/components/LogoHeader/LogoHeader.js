import React from 'react';
import './LogoHeader.css';
import logos from "../../assets/images/logos";

import { useNavigate } from 'react-router-dom';


const LogoHeader = (refs) => {
  const { linkedIn, github, mail, info, CV, home, tech, building } = logos
  const navigate = useNavigate();

  const header = [linkedIn, CV, github, mail]
  const footer = [home, tech, info, building]
  const logoArray = true
    // type 
    ? header : footer



  const navLogin = () => {
    navigate('/')
  }

  return (
    <div className='headerContainer'>
      <div className='headerInnerWidth'>
        {refs.type === 'header' && <div className='logoContainerHeader'>


          {header.map((v, i) => (<a
            href={v.link}
            // download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              // onClick={() => { refs.refs[i]?.current?.scrollIntoView() }}
              src={v.src}
              className='headerLogo'
            />
          </a>))}










        </div>}


        {refs.type === 'footer' && <div className='logoContainerHeader'>


          {header.map((v, i) => (<a
            href={v.link}
            // download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              // onClick={() => { refs.refs[i]?.current?.scrollIntoView() }}
              src={v.src}
              className='headerLogo'
            />
          </a>))}

          {footer.map((v, i) => (<a
            // href={v.link}
            // download
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              onClick={() => { if (refs.refs[i] === '#top') { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) } refs.refs[i]?.current?.scrollIntoView() }}
              src={v.src}
              className='headerLogo'
            />
          </a>))}










        </div>}

      </div>
    </div>
  );
};

export default LogoHeader;
