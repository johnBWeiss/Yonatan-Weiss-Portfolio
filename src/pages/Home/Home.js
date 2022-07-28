import React from 'react';
import './Home.css';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleProject/HomeSingleItem';
import Footer from '../../components/Footer/Footer'
import { mockData } from '../../mockData/mockData';
import videosList from "../../assets/videos/videos"
import ReactPlayer from "react-player"
import profilePic from '../../assets/images/logos/logoPortfolio.png'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import github from '../../assets/images/logos/logoPortfolio.png'


const HomeContainer = () => {
    // const slicedMock = mockData.splice(4)

    return (
        <>
            <LogoHeader />
            <div className='vertFlexHome'>

                <div className='upperContent'>
                    <div className='HomeContainer'>
                        <div className='titleFlex'>
                            <div className='titleInnerFlex'>

                                <div className='HomeTitleOverlay'>
                                    <div className='HomeTitleText'>Hi, I am Yonatan, a Full Stack Developer</div>


                                </div>
                            </div>





                            {<div
                                className='HomeInnerContainer'>

                                <div className='introHeaderContainer'>
                                    <div className='profilePicContainer'>
                                        <img
                                            className='profilePic'
                                            src={profilePic}
                                            title='profile'

                                            alt="pr0file" />
                                    </div>
                                    <img
                                        className='profilePic'
                                        src={profilePic}
                                        title='profile'

                                        alt="pr0file" />  <img
                                        className='profilePic'
                                        src={profilePic}
                                        title='profile'

                                        alt="profile" /></div>
                                {/* {videosList.map((v) => {
                                    return <div className='singleItem'>
                                        <div className='projectTitle'>{v.title}</div>
                                        <div className='frameworkLogoContainer'>
                                            <img
                                                className='frameworkLogo'
                                                src={github}
                                                title='github'

                                                alt="github" /></div>
                                        <ReactPlayer url={v.src} playing={true} loop={true} controls={true} muted={true} width={'28vw'}  ></ReactPlayer>
                                        <div className='logoContainer'> <img
                                            className='logo'
                                            src={github}
                                            title='github'

                                            alt="github" /> <img
                                                className='logo'
                                                src={github}
                                                title='github'
                                                alt="github" /> <img
                                                className='logo'
                                                src={github}
                                                title='github'

                                                alt="github" /></div>
                                    </div>
                                }

                                )} */}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContainer;
