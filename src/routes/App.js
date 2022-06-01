import React from 'react';
import './App.scss';
//import CarList from './components/Car/CarList.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Nav from '../components/Nav/Nav.jsx';
import ProfilePage from '../pages/Profile/ProfilePage.jsx';
import About from '../pages/About/About.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
import RegisterPage from '../pages/Register/RegisterPage.jsx';
import CarPage from '../pages/Car/CarPage.jsx';
import RentPage from '../pages/Rent/RentPage.jsx';
import Contact from '../pages/contact/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Nav value={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-cars" element={<CarPage />} />
        <Route path="/rent/:id" element={<RentPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
