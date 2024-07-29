import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';
// import contactImage from './images/contact.jpg'; // Example image import

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-text">
                    <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                    <ul>
                        <li>Email: support@partyplanner.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                        <li>Address: 123 Party Street, Celebration City, CA 12345</li>
                    </ul>
                    <p>Follow us on social media:</p>
                    <ul className="social-icons">
                        <li>
                            <a href="https://facebook.com/partyplanner" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/partyplanner" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/partyplanner" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} className="icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="contact-image"> */}
                    {/* <img src={contactImage} alt="Contact Us" /> */}
                {/* </div> */}
            </div>
        </section>
    );
};

export default Contact;
