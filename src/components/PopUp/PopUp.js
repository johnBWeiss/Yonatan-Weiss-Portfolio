import React from 'react'

export const PopUp = (popUP) => {

    const { data: { title }, data: { pic }, data: { description } } = popUP
    return (
        <div className='popUpInnerContainer'>
            <div className='popUpTitle'>{title}</div>
            <div className='upperPopUpContent'>
                <img
                    className='popUpImage'
                    src={pic}
                    alt="pic"
                />
                <div className='popUpDescription'>
                    {description}
                </div>
            </div>
        </div>
    )
}
