import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import AtStore from './pages/atStore';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import Login from './pages/login';
import Registration from './pages/registration';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content fills available space */}
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/at-store" element={<AtStore />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
