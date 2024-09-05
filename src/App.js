import logo from './logo.svg';
import './App.css';
import {BrowserRoute as Router, Routes, Route} from 'react-router-dom';
import homePage from './Components/Pages/Home/homePage';
import productPage from './Components/Pages/Product/productPage';
import teamPage from './Components/Pages/Team/teamPage';
import contactPage from './Components/Pages/Contact/contactPage';
import Navbar from './Components/Navbar';
import Footbar from './Components/Footbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<homePage/>}/>
            <Route path="/Homepage" element={<homePage/>}/>
            <Route path="/Product" element={<productPage/>}/>
            <Route path="/Team" element={<teamPage/>}/>
            <Route path="/Contancts" element={<contactPage/>}/>
          </Routes>
          <Footbar/>
        </div>
      </Router>
    </div>
  );
}