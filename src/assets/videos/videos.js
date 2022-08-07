import cinema from "../../assets/videos/Cinema.mp4"
import Musixx from "../../assets/videos/Musixx.mp4"
import Phoogle from "../../assets/videos/Phoogle.mp4"
import TITANWAR from "../../assets/videos/TITANWAR.mp4"
import angularLogo from '../../assets/images/logos/angular.png'
import reactLogo from '../../assets/images/logos/react.png'
import JsLogo from '../../assets/images/logos/js.png'
import vueLogo from '../../assets/images/logos/vue.png'


const videosList = [{ src: cinema, title: 'Cinema', logo: angularLogo, live: true, link: 'https://github.com/johnBWeiss/FilmCritic/tree/main/src/app', domain: 'https://cinema-yonatan-weiss.netlify.app/', description: 'A minimalistic web app designed for searching the most popular movies listed in the imdb database. The app has an option to search for specific titles according to personal input as well.' },
{
    src: Musixx, title: 'Musixx', logo: reactLogo, live: false, link: 'https://github.com/johnBWeiss/Musixx/tree/main/src', description: 'A restyled clone of YouTube, allowing users to search and play videos, authenticate credentials, and add to a database of favorites.'
},
{
    src: Phoogle, title: 'Phoogle', logo: vueLogo, live: false, link: 'https://github.com/johnBWeiss/phoogle---a-visual-search-engine/tree/main/src',
    description: 'A search engine that returns both the links of your search results, and their homepage screenshots as well, enabling an additional visual aid for an improved user experience.'
},
{ src: TITANWAR, title: 'TitanWar', logo: JsLogo, live: false, link: 'https://github.com/johnBWeiss/TITANWAR', description: 'An immersive fantasy themed memory game with animation, sound effects, and an atypical point management system, with the ability to save and display a high score list.' }];
export default videosList 