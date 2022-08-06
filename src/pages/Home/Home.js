import React, { useEffect, useState, useRef } from "react";
import './Home.css';
import profilePic from '../../assets/images/profileS.png'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { About } from "../../components/About/About";
import { Projects } from '../../components/Projects/Projects';
import openingParagraph from '../../assets/text/text'
import downArrow from '../../assets/images/logos/downArrow.png'
import { MyStack } from "../../components/MyStack/MyStack";
import { SideBar } from "../../components/SideBar/SideBar";
import { PopUp } from "../../components/PopUp/PopUp";

const HomeContainer = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [showProjects, setShowProjects] = useState(false);
    const [showMore, setShowMore] = useState(true);
    const [myProjectsEffect, setMyProjectsEffect] = useState('noShowProjects');
    const [sideBarClass, setSideBarClass] = useState('noShowSideBar');
    const [openingTextClass, setOpeningTextClass] = useState(true);
    const [AboutRefClass, setAboutRefClass] = useState('noShowAbout');
    const [count, setCount] = useState(0);
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpContent, setPopUpContent] = useState(null)



    const myProjects = useRef(null)
    const stackRef = useRef(null)
    const AboutRef = useRef(null)



    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (
            window.innerHeight + window.scrollY + 0.5 >=
            document.body.offsetHeight
        ) {
            setShowProjects(true)
            setMyProjectsEffect('showProjects')
            setShowMore(false)
        }
        else {
            setShowProjects(false)
            setShowMore(true)
        }

        if (
            window.innerHeight + window.scrollY - 550 >=
            AboutRef?.current?.offsetTop

        ) {
            setAboutRefClass('AboutContainer')
        }

        else {
            setAboutRefClass(null)

        }


        if (
            window.scrollY >= (window.innerHeight - 400)
        ) {
            setSideBarClass('sideBarContainer')
        }

        else {
            setSideBarClass('noShowSideBar')
        }

        if (
            window.scrollY + 450 >=
            stackRef?.current?.offsetTop
        ) {
            setSideBarClass('noShowSideBar')
        }

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
            setOpeningTextClass((prevClass) => !prevClass)
        }, 7500);

        return () => clearInterval(interval);
    }, []);

    if (count === openingParagraph.length) {
        setCount(0)
    }

    const showPopUpHandler = (v) => {
        setShowPopUp(!showPopUp)
        setPopUpContent(v)
    }

    return (
        <div className='vertFlexHome'>
            <LogoHeader type={'header'} />
            <div className='HomeContainer'>
                <div className='titleInnerFlex'>
                    <div className='HomeTitleOverlay'>
                        <div className='HomeTitleText'>Hi, I am Yonatan, a Full Stack Developer</div>
                    </div>
                </div>
                {<div className='introHeaderContainer'>
                    <div className='introInnerHeaderContainer'>
                        <div className='profilePicContainer'>
                            <img
                                className='profilePic'
                                src={profilePic}
                                title='profile'
                                alt="profile" />
                        </div>
                        <div className={openingTextClass ? 'personalMessage' : 'emptyPersonalMessage'}>
                            {openingParagraph[count]}
                        </div>
                    </div>
                </div>}
                {showMore && <img className="downArrow" src={downArrow} />}
                {!showMore && <div className={`titleText ${myProjectsEffect}`} ref={myProjects}>My Projects</div>}
                {showProjects &&
                    <div className={myProjectsEffect}>
                        <Projects fatherPopUpHandler={showPopUpHandler} />
                    </div>
                }

            </div>
            {showProjects && <>
                {<div id='test' className={`titleText`} ref={AboutRef}>About</div>}
                <About refContainer={AboutRefClass} />
                {<div className={`titleText ${myProjectsEffect}`} ref={stackRef}>My Stack</div>}
                <MyStack />


                {<SideBar class={sideBarClass} refs={['#top', stackRef, AboutRef, myProjects]} />
                }
                <LogoHeader refs={['#top', myProjects]} type={'footer'} />
            </>}
            {showPopUp && <PopUp fathershowPopUpHandler={showPopUpHandler} content={popUpContent} />}
        </div>
    );
};

export default HomeContainer;
