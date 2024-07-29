import React from 'react';
import './AboutUs.css';
// import teamImage from './images/team.jpg'; // Example image import

const AboutUs = () => {
    return (
        <section id="about">
            <h2>About Us</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Party Planner is dedicated to making your event planning process seamless and enjoyable. We provide tools for easy event scheduling, guest management, budget tracking, and more.</p>
                    <p>Our mission is to take the stress out of planning so you can focus on enjoying your event. Whether it's a small gathering or a large celebration, we have the tools and expertise to help you every step of the way.</p>
                    <p>Join thousands of happy customers who have made their events unforgettable with Party Planner.</p>
                </div>
                {/* <div className="about-image"> */}
                    {/* <img src={teamImage} alt="Our Team" /> */}
                {/* </div> */}
            </div>
        </section>
    );
};

export default AboutUs;
