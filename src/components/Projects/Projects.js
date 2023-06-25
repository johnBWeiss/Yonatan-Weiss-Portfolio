import React from 'react'
import videosList from '../../assets/videos/videos'
import logos from '../../assets/images/logos'


import './Projects.css'

const Projects = (upgrades) => {
    const { fatherPopUpHandler } = upgrades
    const { github, info, live } = logos

    const projectInfoPopUpHandler = (v) => {
        fatherPopUpHandler(v)
    }

    return (
        <div className='projectGalleryContainer'>
            {videosList.map((v) => (
                <div className='singleItem' key={v.title} >
                    <div className='frameworkLogoContainer'>
                        <img
                            className='frameworkLogo'
                            src={v.logo}
                            title={v.title}
                            onClick={() => { projectInfoPopUpHandler(v) }}
                            alt="github" /></div>
                    <div className='projectTitle' onClick={() => { projectInfoPopUpHandler(v) }}>{v.title}</div>

                    <div className='projectVideoContainer'>
                        {/* <video width="100%" height="100%" controls='true' poster="../../assets/images/bannerBackground.jpg"
                            src={v.src} autoPlay loop playsInline muted type='video/mp4'>
                        </video> */}
                        <img src={v.img} alt={v.title}
                            onClick={() => { projectInfoPopUpHandler(v) }}

                            width={'100%'} />


                    </div>
                    <div className='logoContainer'>
                        <a

                            href={v.link} target='_blank'
                            rel="noreferrer">

                            <img
                                className='logo'
                                src={github.src}
                                title='github'
                                alt="github" /></a>

                        {v.live && <a
                            href={v.domain} target='_blank'
                            rel="noreferrer"
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
        </div>)
}

export default Projects