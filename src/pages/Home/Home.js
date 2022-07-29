import React from 'react';
import './Home.css';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleProject/HomeSingleItem';
import Footer from '../../components/Footer/Footer'
import { mockData } from '../../mockData/mockData';
import profilePic from '../../assets/images/logos/logoPortfolio.png'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { Projects } from '../Projects/Projects';

const HomeContainer = () => {
    // const slicedMock = mockData.splice(4)

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
                        <div className='personalMessage'>Let's talk!
                            I can build end to end web applications
                            for your company with the latest tech, and as
                            a bonus you will get a hard working,funny,
                            loyal and supportive team member. You are more than welcome to have a look around. Enjoy!

                        </div>

                    </div>

                </div>

                <div className='titleText'>My Projects</div>
                <Projects />

            </div>
        </div>
    );
};

export default HomeContainer;
