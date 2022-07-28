import React, { useState } from 'react';
import './HomeSingleItem.css';

const HomeSingleItem = (singleItem) => {
  const { data } = singleItem
  const { title, author, year, genre, pic, description } = data

  const [showPopUp, setShowPopUp] = useState(false)

  const popUpHandler = () => {
    setShowPopUp(!showPopUp)
  }
  return (
    <div className='galleryContainer vertContainerFlex' onClick={popUpHandler}>
      <img
        className='HomeSingleItemImage'
        src={pic}
        alt="item pic" />
      <div
        className='vertFlex itemDetailsContainer'>
        <div className='itemTitleMore'>
          {title}
        </div>
        <div>
          {author}
        </div>
        <div>
          {year}
        </div>
      </div>
      {showPopUp && (
        <div className='popUp' onClick={popUpHandler}>
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
        </div>
      )}
    </div>
  );
};

export default HomeSingleItem;
