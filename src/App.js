//import logo from './logo.svg';
//import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import HomePage from './Components/Pages/Home/homePage';
import ProductPage from './Components/Pages/Product/productPage';
import TeamPage from './Components/Pages/Team/teamPage';
import ContactPage from './Components/Pages/Contact/contactPage';
import FootnoteBar from './Components/Footbar';

function App() {
  return (
    <div className="App">
      <Router basename='Cyberacademy'>
        <div>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Homepage" element={<HomePage />}/>
            <Route path="/Product" element={<ProductPage />}/>
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