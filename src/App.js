import './App.css';
import Home from './pages/Home/Home';
import background from './assets/images/BackgroundStripesBright.png'




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
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
