import cinema from "../../assets/videos/Cinema.mp4"
import Musixx from "../../assets/videos/Musixx.mp4"
import Phoogle from "../../assets/videos/Phoogle.mp4"
import TITANWAR from "../../assets/videos/TITANWAR.mp4"
import Gamin from "../../assets/videos/Gamin.mp4"
import LearnAI from "../../assets/videos/LearnAI.mp4"
import angularLogo from '../../assets/images/logos/angular.png'
import reactLogo from '../../assets/images/logos/react.png'
import JsLogo from '../../assets/images/logos/js.png'
import vueLogo from '../../assets/images/logos/vue.png'
import phoogleImg from '../../assets/images/phoogle.png'
import titanWArImg from '../../assets/images/titanWarImg.png'
import gaminImg from "../../assets/images/gaminImg.png"
import LearnAIimg from "../../assets/images/learnAI.png"
import CinemaImg from "../../assets/images/cinemaImg.png"
import musixxImg from "../../assets/images/musixxImg.png"


const videosList = [

    {
        src: Gamin, title: 'Gamin', logo: reactLogo, img: gaminImg,
        live: true, link: 'https://github.com/johnBWeiss/Gamin/tree/main/src',
        domain: 'https://gamin-yonatan-weiss.netlify.app/',
        description: `Find the best free-to-play games!
Search by categories, or browse through the entire list sorted by the latest release date.
Happy Gamin'!`
    },
    {
        img: phoogleImg, src: Phoogle, title: 'Phoogle', logo: vueLogo,
        live: false, link: 'https://github.com/johnBWeiss/phoogle---a-visual-search-engine/tree/main/src',
        description: `A search engine that returns both the links of your search results,
     and their homepage screenshots as well, enabling an additional visual
      aid for an improved user experience.`
    },
    {
        img: titanWArImg, src: TITANWAR, title: 'TitanWar', logo: JsLogo,
        live: false, link: 'https://github.com/johnBWeiss/TITANWAR',
        description: 'An immersive fantasy themed memory game with animation, sound effects, and an atypical point management system, with the ability to save and display a high score list.'
    }, {
        src: LearnAI, title: 'Learn AI', logo: reactLogo, img: LearnAIimg,
        live: true, link: 'https://github.com/johnBWeiss/Learn-AI/tree/main/src',
        domain: 'https://learn-ai-optimize-developers.netlify.app/',
        description: `An enterprise-level onboarding tool for junior developers, designed to optimize the efficiency
         of newly recruited team members.`
    },
    {
        src: cinema, title: 'Cinema', logo: angularLogo, img: CinemaImg,
        live: true, link: 'https://github.com/johnBWeiss/FilmCritic/tree/main/src/app',
        domain: 'https://cinema-yonatan-weiss.netlify.app/',
        description: 'A minimalistic web app designed for searching the most popular movies listed in the imdb database. The app has an option to search for specific titles according to personal input as well.'
    },
    {
        src: Musixx, title: 'Musixx', logo: reactLogo, img: musixxImg,
        live: false, link: 'https://github.com/johnBWeiss/Musixx/tree/main/src',
        description: `A restyled clone of YouTube, allowing users to search and play videos,
       authenticate credentials, and add to a database of favorites.`
    },];



export default videosList 