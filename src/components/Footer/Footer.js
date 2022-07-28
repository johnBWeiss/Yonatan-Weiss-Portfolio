import React from 'react';
import './Footer.css';
import footer from '../../assets/images/footerSwirl.png'



const Footer = () => {

    return (
        <div className='footerContainer'>
            <div className='sloganContainer'>
                <img src={footer} alt="footer" className='footer' />
                <div>Bookify - one stop shop for everything books</div>
            </div>
        </div>


    );
};

export default Footer;
