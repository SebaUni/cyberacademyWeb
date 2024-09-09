//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from '../pages/home';
import AboutUsPage from '../pages/aboutUs';
import ContactPage from '../pages/contact';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Homepage" element={<HomePage />}/>
            <Route path="/AboutUs" element={<AboutUsPage />}/>
            <Route path="/Contact" element={<ContactPage />}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;