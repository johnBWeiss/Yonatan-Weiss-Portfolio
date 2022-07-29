import React from 'react'
import videosList from '../../assets/videos/videos'
import github from '../../assets/images/logos/logoPortfolio.png'
import ReactPlayer from "react-player"
import './Projects.css'

export const Projects = () => {
    return (
        <div className='projectGalleryContainer'>

            {videosList.map((v) => (

                <div className='singleItem'>
                    <div className='projectTitle'>{v.title}</div>
                    <div className='frameworkLogoContainer'>
                        <img
                            className='frameworkLogo'
                            src={github}
                            title='github'

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
