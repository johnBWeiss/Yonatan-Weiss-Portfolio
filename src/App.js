import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import LogoHeader from './components/LogoHeader/LogoHeader';
import background from './assets/images/bannerImage1.jpg'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="app">
      <img
        className='background'
        src={background}
      />

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
