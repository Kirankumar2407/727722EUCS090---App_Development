import React from 'react';
import Contact from './Contact';
import AboutUs from './AboutUs';
// import './LandingPage.css'; // Import the CSS specific to this component

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to Party Planner</h1>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
            </header>
            <section className="hero">
                <h2>Plan Your Perfect Party with Ease</h2>
                <p>Join us for a seamless event planning experience.</p>
                <a href="/register" className="cta-button">Get Started</a>
            </section>
            <section id="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy Event Scheduling</li>
                    <li>Guest Management Tools</li>
                    <li>Budget Tracking</li>
                    <li>Customizable Themes</li>
                </ul>
            </section>
            <AboutUs />
            <Contact />
            <footer>
                <p>&copy; 2024 Party Planner. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
