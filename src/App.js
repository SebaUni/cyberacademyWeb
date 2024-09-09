//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import HomePage from './Components/Pages/Home/homePage';
import AboutPage from './Components/Pages/About/aboutPage';
import TeamPage from './Components/Pages/Team/teamPage';
import ContactPage from './Components/Pages/Contact/contactPage';
import FootnoteBar from './Components/Footbar';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Homepage" element={<HomePage />}/>
            <Route path="/About" element={<AboutPage />}/>
            <Route path="/Team" element={<TeamPage />}/>
            <Route path="/Contacts" element={<ContactPage />}/>
          </Routes>
          <FootnoteBar/>
        </div>
      </Router>
    </div>
  );
}

export default App;