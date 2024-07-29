import React from 'react';
import Contact from './Contact';
import AboutUs from './AboutUs';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section className="hero bg-gray-100 py-10 text-center">
                <h2 className="text-4xl font-bold mb-4">Plan Your Perfect Party with Ease</h2>
                <p className="text-lg mb-6">Join us for a seamless event planning experience.</p>
                <a href="/register" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Get Started</a>
            </section>
            <section id="features" className="py-10 bg-white text-center">
                <h2 className="text-3xl font-bold mb-6">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Easy Event Scheduling</li>
                    <li>Guest Management Tools</li>
                    <li>Budget Tracking</li>
                    <li>Customizable Themes</li>
                </ul>
            </section>
            <AboutUs />
            <Contact />
        </div>
    );
};

export default LandingPage;
