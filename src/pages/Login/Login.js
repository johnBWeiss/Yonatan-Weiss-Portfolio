import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/bookLogo.png'

import './Login.css'



const Login = () => {

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/home')
    }

    return (
        <div className='LoginWrapper'>

            <div className='loginBoxContainer'>

                <div className='loginBoxInnerContainer'>
                    <div className='loginTitle'>sign in</div>
                    <div className='loginBoxInputFlex'>
                        <div className='loginText'>user name: </div>
                        <input className='loginInput' />
                    </div>
                    <div className='loginBoxConfirmFlex'>
                        <img src={logo} alt="logo" className='logo' />
                        <div className='confirmButton' onClick={navHome}>submit </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
