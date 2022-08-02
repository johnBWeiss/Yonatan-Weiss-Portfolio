import React, { useEffect, useState, useRef } from "react";
import './Home.css';
import profilePic from '../../assets/images/logos/logoPortfolio.png'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { Projects } from '../../components/Projects/Projects';
import openingParagraph from '../../assets/text/text'
import downArrow from '../../assets/images/logos/downArrow.png'

const HomeContainer = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [showProjects, setShowProjects] = useState(false);
    const [showMore, setShowMore] = useState(true);

    const [myProjectsEffect, setMyProjectsEffect] = useState('noShowProjects');
    const [openingTextClass, setOpeningTextClass] = useState(true);
    const [count, setCount] = useState(0);
    const myProjects = useRef(null)


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

        // if (
        //     window.scrollY + 20 >=
        //     myProjects.current.offsetHeight
        // ) {
        //     setShowProjects(true)

        //     setMyProjectsEffect('showProjects')
        // }

        else {
            setShowProjects(false)
            setShowMore(true)

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

    return (
        <div className='vertFlexHome'>

            <LogoHeader />
            <div className='HomeContainer'>

                <div className='titleInnerFlex'>
                    <div className='HomeTitleOverlay'>
                        <div className='HomeTitleText'>Hi, I am Yonatan, a Full Stack Developer</div>
                    </div>
                </div>

                <div className='introHeaderContainer'>
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

                </div>
                {showMore && <img className="downArrow" src={downArrow} />}
                {!showMore && <div className={`titleText ${myProjectsEffect}`} ref={myProjects}>My Projects</div>}
                {showProjects &&
                    <div className={myProjectsEffect}>
                        <Projects /></div>
                }
            </div>
        </div>
    );
};

export default HomeContainer;
