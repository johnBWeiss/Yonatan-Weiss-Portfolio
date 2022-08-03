import React from 'react'
import logos from '../../assets/images/logos'
import './SideBar.css'

const { home, linkedIn, github, tech } = logos

const logoArray = [github, linkedIn, tech, home]

// 'singleSideBar'
export const SideBar = (animation) => {
    return (
        <div className={`${animation.class}`}>
            {logoArray.map((v) => (<div className={animation.footer ? 'singleFooterSideBar' : 'singleSideBar'}>
                <img
                    className='sideBarLogo'
                    src={v.src}
                    title=''
                    alt="" />
                {!animation.footer && <div className='sideBarTitle'>{v.title}</div>
                }            </div>))
            }

        </div>
    )
}
