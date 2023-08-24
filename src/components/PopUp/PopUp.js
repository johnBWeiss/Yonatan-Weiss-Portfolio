import React from 'react'
import './PopUp.css'

import X from '../../assets/images/logos/x.png'


const PopUp = (popUP) => {
    const { fathershowPopUpHandler, content } = popUP
    const showPopUpHandler = () => fathershowPopUpHandler()

    return (
        <div className='popUp' onClick={showPopUpHandler}>
            <div className='popUpInnerContainer'>
                <img className='X' src={X} alt='X' />
                <div className='popUpTitle'>{content.title}</div>
                <div className='upperPopUpContent'>
                    <div className='playerContainer'>

                        {content?.title !== 'Weather' && <video width="100%" height="100%" autoPlay muted playsInline>
                            <source src={content.src} type='video/mp4' />
                        </video>}
                        {content?.title === 'Weather' && <img width='90%' src={content.src} alt={content.src} />}

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