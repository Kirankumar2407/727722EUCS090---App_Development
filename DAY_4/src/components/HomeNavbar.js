// components/HomeNavbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeNavbar = ({ onLogout }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-white shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">K3 Events Planner</div>
        <div className="space-x-4">
          <Link to="/services" className="text-gray-700 hover:text-indigo-500">Services</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-indigo-500">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-500">Contact</Link>
          <button onClick={handleLogout} className="text-gray-700 hover:text-indigo-500">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
