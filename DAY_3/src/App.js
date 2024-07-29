import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header className="bg-blue-600 text-white p-4">
                    <nav className="container mx-auto flex justify-between items-center">
                        <h1 className="text-3xl font-bold"><Link to="/">Party Planner</Link></h1>
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                            <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
                            <li><Link to="/register" className="hover:text-yellow-300">Register</Link></li>
                        </ul>
                    </nav>
                </header>
                <main className="container mx-auto py-4">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
