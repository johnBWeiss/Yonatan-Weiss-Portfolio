import React from 'react'
import './PopUp.css'


const PopUp = (popUP) => {
    const { fathershowPopUpHandler, content } = popUP
    const showPopUpHandler = () => fathershowPopUpHandler()

    return (
        <div className='popUp' onClick={showPopUpHandler}>
            <div className='popUpInnerContainer'>
                <div className='popUpTitle'>{content.title}</div>
                <div className='upperPopUpContent'>
                    <div className='playerContainer'>
                        <video width="100%" height="100%" src={content.src} autoPlay muted>
                        </video>

                    </div>
                    <div className='popUpDescription'>
                        {content.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopUp