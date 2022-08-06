import React from 'react';
import './LogoHeader.css';
import logos from "../../assets/images/logos";


const LogoHeader = (refs) => {
  const { linkedIn, github, mail, CV, home, projects } = logos
  const header = [linkedIn, CV, github, mail]
  const footer = [home, projects]

  return (
    <div className='headerContainer'>
      <div className='headerInnerWidth'>
        {refs.type === 'header' && <div className='logoContainerHeader'>
          {header.map((v, i) => (<a
            href={v.link}
            target="_blank"
            rel="noreferrer noopener"
            key={v.src}
          >
            <img
              src={v.src}
              className='headerLogo'
            />
          </a>))}
        </div>}
        {refs.type === 'footer' && <div className='logoContainerHeader'>

          {footer.map((v, i) => (<a
            target="_blank"
            rel="noreferrer noopener"
            key={v.src}
          >
            <img
              onClick={() => { if (refs.refs[i] === '#top') { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) } refs.refs[i]?.current?.scrollIntoView() }}
              src={v.src}
              alt={v.title}
              title={v.title}
              key={v.src}
              className='headerLogo'
            />
          </a>))}
          {header.map((v, i) => (<a
            href={v.link}
            target="_blank"
            rel="noreferrer noopener"
            key={v.src}
          >
            <img
              src={v.src}
              className='headerLogo'
              alt={v.title}
              title={v.title}
            />
          </a>))}
        </div>}
      </div>
    </div>
  );
};

export default LogoHeader;
