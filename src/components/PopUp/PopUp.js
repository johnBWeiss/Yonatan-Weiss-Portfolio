import React from 'react'
import './PopUp.css'
import ReactPlayer from "react-player"


export const PopUp = (popUP) => {
    const { fathershowPopUpHandler, content } = popUP
    const showPopUpHandler = () => fathershowPopUpHandler()

    return (
        <div className='popUp' onClick={showPopUpHandler}>
            <div className='popUpInnerContainer'>
                <div className='popUpTitle'>{content.title}</div>
                <div className='upperPopUpContent'>
                    <div className='playerContainer'>
                        <ReactPlayer url={content.src} playing={true}
                            loop={true} controls={false}
                            muted={true} height={'100%'} width={'100%'} ></ReactPlayer></div>
                    <div className='popUpDescription'>
                        {content.description}                           </div>
                </div>
            </div>
        </div>
    )
}
