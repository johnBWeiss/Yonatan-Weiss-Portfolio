import React from 'react'
import logos from '../../assets/images/logos'
import './SideBar.css'

const { github, linkedIn, tech, home } = logos

const logoArray = [github, linkedIn, tech, home]


export const SideBar = () => {
    return (
        <div className='sideBarContainer'>
            {logoArray.map((v) => (<div className='singleSideBar'>
                <img
                    className='sideBarLogo'
                    src={v.src}
                    title=''
                    alt="" />
                <div className='sideBarTitle'>{v.title}</div>
            </div>))
            }

        </div>
    )
}
