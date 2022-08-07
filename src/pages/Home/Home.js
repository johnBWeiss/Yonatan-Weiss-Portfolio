import React, { useEffect, useState, useRef } from "react";
import './Home.css';
import profilePic from '../../assets/images/profileS.png'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import About from "../../components/About/About";
import Projects from '../../components/Projects/Projects';
import openingParagraph from '../../assets/text/text'
import downArrow from '../../assets/images/logos/downArrow.png'
import MyStack from "../../components/MyStack/MyStack";
import SideBar from "../../components/SideBar/SideBar";
import PopUp from "../../components/PopUp/PopUp";

const HomeContainer = () => {

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
    const ArrowRef = useRef(null)
    const scrollChecker = useRef(false)

    const handleScroll = () => {
        // const position = window.pageYOffset;
        // setScrollPosition(position);

        if (
            window?.scrollY - 2 <=
            0
        ) {
            setShowProjects(false)
            setShowMore(true)
        }
        if (
            window?.scrollY >=
            ArrowRef?.current?.offsetTop

        ) {

            setSideBarClass('sideBarContainer')

            if (!scrollChecker.current) {
                setShowProjects(true)
                setMyProjectsEffect('showProjects')
                setShowMore(false)
                const scroller = () => {
                    console.log('scroller');
                    myProjects.current?.scrollIntoView()

                    scroller()
                }
            }

            scrollChecker.current = true


        }
        else {
            scrollChecker.current = false
            setShowProjects(false)
            setShowMore(true)
            setSideBarClass('noShowSideBar')
        }
        if (
            window?.innerHeight + window?.scrollY - 550 >=
            AboutRef?.current?.offsetTop

        ) {
            setAboutRefClass('AboutContainer')
        }
        else {
            setAboutRefClass(null)

        }
        if (
            window?.scrollY
            >=
            stackRef?.current?.offsetTop || window?.scrollY + window?.innerHeight + 100 >=
            document?.body?.offsetHeight
        ) {
            setSideBarClass('noShowSideBar')
        }

    };

    useEffect(() => {
        window?.addEventListener("scroll", handleScroll);

        return () => {
            window?.removeEventListener("scroll", handleScroll);
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
                        <div className='HomeTitleTextTop'>Hi, I am Yonatan,</div>
                        <div className='HomeTitleTextBottom'>a Full Stack Developer</div>

                    </div>
                </div>
                {<div className='introHeaderContainer' ref={ArrowRef}>
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
                {showMore && <img className="downArrow" src={downArrow} alt='downArrow' />}
                {!showMore && <div className={`titleText ${myProjectsEffect}`} ref={myProjects}>Projects</div>}
                {showProjects &&
                    <div className={myProjectsEffect}>
                        <Projects fatherPopUpHandler={showPopUpHandler} />
                    </div>
                }
            </div>
            {showProjects && <>
                {<div id='test' className={`titleText`} ref={AboutRef}>About</div>}
                <About refContainer={AboutRefClass} />
                {<div className={`titleText ${myProjectsEffect}`} ref={stackRef}>Stack</div>}
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
