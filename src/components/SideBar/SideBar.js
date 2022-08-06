import React from 'react'
import logos from '../../assets/images/logos'
import './SideBar.css'



const SideBar = (animation) => {
    const { home, linkedIn, CV, info, tech, projects } = logos

    const logoArray = [home, tech, info, projects, linkedIn, CV]

    return (
        <div className={`${animation.class}`}>
            {logoArray.map((v, i) => (<a
                className={animation.footer ? 'singleFooterSideBar' : 'singleSideBar'}
                href={v.link}
                onClick={() => { if (animation.refs[i] === '#top') { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) } if (!v.link) { animation.refs[i]?.current?.scrollIntoView() } }}
                target="_blank"
                rel="noreferrer noopener"
                key={v.src}
            >

                <img
                    className='sideBarLogo'
                    src={v.src}
                    title=''
                    alt="" />
                {!animation.footer && <div className='sideBarTitle'>{v.title}</div>
                }           </a>


            ))
            }

        </div>
    )
}

export default SideBar