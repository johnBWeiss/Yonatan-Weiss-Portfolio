import React, { useState } from 'react'
import videosList from '../../assets/videos/videos'
import logos from '../../assets/images/logos'


import ReactPlayer from "react-player"
import './Projects.css'

export const Projects = (upgrades) => {
    const { fatherPopUpHandler } = upgrades
    const { github, info, live } = logos
    // const [showPopUp, setShowPopUp] = useState(true)



    const projectInfoPopUpHandler = (v) => {

        // setShowPopUp(!showPopUp)
        fatherPopUpHandler(v)

    }

    return (
        <div className='projectGalleryContainer'>

            {videosList.map((v) => (

                <div className='singleItem'>
                    <div className='projectTitle'>{v.title}</div>
                    <div className='frameworkLogoContainer'>
                        <img
                            className='frameworkLogo'
                            src={v.logo}
                            title={v.title}

                            alt="github" /></div>
                    <ReactPlayer url={v.src} playing={true}
                        loop={true} controls={true}
                        muted={true} width={'100%'} ></ReactPlayer>
                    <div className='logoContainer'>
                        <a

                            href={v.link} target='_blank'>
                            <img
                                className='logo'
                                src={github.src}
                                title='github'
                                alt="github" /></a>

                        {v.live && <a
                            href={v.domain} target='_blank'
                        ><img
                                className='logo'
                                src={live}
                                title='Live'
                                alt="Live" /></a>}


                        <img
                            onClick={() => { projectInfoPopUpHandler(v) }}
                            className='logo'
                            src={info.src}
                            title='info'
                            alt="info" />
                    </div>


                </div>





            )

            )}

            {/* {showPopUp && (
                <div className='popUp' onClick={projectInfoPopUpHandler}>
                    <div className='popUpInnerContainer'>
                        <div className='popUpTitle'>tutle here</div>
                        <div className='upperPopUpContent'>
                            <img
                                        className='popUpImage'
                                        src={ }
                                        alt="pic"
                                    />
                            <div className='popUpDescription'>
                                'title here'                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>)
}
