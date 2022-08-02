import cinema from "../../assets/videos/Cinema.mp4"
import Musixx from "../../assets/videos/Musixx.mp4"
import Phoogle from "../../assets/videos/Phoogle.mp4"
import TITANWAR from "../../assets/videos/TITANWAR.mp4"
import angularLogo from '../../assets/images/logos/angular.png'
import reactLogo from '../../assets/images/logos/react.png'
import JsLogo from '../../assets/images/logos/js.png'
import vueLogo from '../../assets/images/logos/vue.png'


const videosList = [{ src: cinema, title: 'Cinema', logo: angularLogo, live: true },
{ src: Musixx, title: 'Musixx', logo: reactLogo, live: false },
{ src: Phoogle, title: 'Phoogle', logo: vueLogo, live: false },
{ src: TITANWAR, title: 'TitanWar', logo: JsLogo, live: false }];
export default videosList 