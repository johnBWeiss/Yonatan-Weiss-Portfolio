import React from 'react'
import videosList from '../../assets/videos/videos'
import logos from '../../assets/images/logos'


import ReactPlayer from "react-player"
import './Projects.css'

export const Projects = () => {

    const { linkedIn, github, mail } = logos
    return (
        <div className='projectGalleryContainer'>

            {videosList.map((v) => (

                <div className='singleItem'>
                    <div className='projectTitle'>{v.title}</div>
                    <div className='frameworkLogoContainer'>
                        <img
                            className='frameworkLogo'
                            src={v.logo}
                            title='logo'

                            alt="github" /></div>
                    <ReactPlayer url={v.src} playing={true}
                        loop={true} controls={true}
                        muted={true} width={'18vw'}  ></ReactPlayer>
                    <div className='logoContainer'> <img
                        className='logo'
                        src={github}
                        title='github'

                        alt="github" /> <img
                            className='logo'
                            src={github}
                            title='github'
                            alt="github" /> <img
                            className='logo'
                            src={github}
                            title='github'

                            alt="github" /></div>
                </div>
            )

            )}


        </div>)
}
