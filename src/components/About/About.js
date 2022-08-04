import React from 'react'
import './About.css'
import logos from '../../assets/images/logos'

export const About = ({ refContainer }) => {
    const { location, creativity, hardworker, building, developer, crown, responsive } = logos
    const aboutLogos = [creativity, location, hardworker, building, developer, responsive]
    return (
        <div className={refContainer ? refContainer : 'noShowAbout'}>
            <div className='aboutInnerContainer'>

                {aboutLogos.map((v) => (<div className='aboutSingleItem'>
                    <img
                        className='aboutLogo'
                        src={v.src}
                        alt='location'
                    />
                    <div className='aboutLogoTitle'>{v.title}</div>
                </div>))}
            </div>




        </div>
    )
}
