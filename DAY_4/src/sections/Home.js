import React from 'react';
import HomeNavbar from "../components/HomeNavbar";
import { FaCheckCircle, FaRegStar, FaCameraRetro, FaQuoteLeft, FaTrophy } from 'react-icons/fa';

const Home = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col">
      <HomeNavbar /> {/* Render Navbar */}
      <div className="flex-grow container mx-auto px-4 pt-20">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Welcome to Party Planner</h1>
          <p className="mt-2 text-white text-lg font-medium drop-shadow-md">Plan your dream event with our expert team!</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
            <FaCheckCircle className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Custom Packages</h2>
            <p className="text-gray-700">Tailor your event with personalized packages that fit your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
            <FaRegStar className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Expert Assistance</h2>
            <p className="text-gray-700">Our experienced planners will guide you through every step.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
            <FaCameraRetro className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Gallery</h2>
            <p className="text-gray-700">Explore our stunning event galleries for inspiration.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaTrophy className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Stress-Free Planning</h2>
            <p className="text-gray-700">Enjoy a seamless planning process without the usual stress.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaQuoteLeft className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Unique Experiences</h2>
            <p className="text-gray-700">We create memorable events that reflect your style.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaCheckCircle className="text-indigo-500 text-4xl mb-3" />
            <h2 className="text-xl font-bold mb-2 text-indigo-500">Cost-Effective Solutions</h2>
            <p className="text-gray-700">Get the best value for your budget with tailored packages.</p>
          </div>
        </div>

        {/* Interactive Gallery Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-indigo-500 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Repeat for each gallery item */}
            <div className="relative group">
              <img src="/images/event1.jpg" alt="Event 1" className="rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">Corporate Event</p>
              </div>
            </div>
            {/* More gallery items here */}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3 text-indigo-500">Our Objectives</h2>
          <p className="text-gray-700">At Party Planner, our goal is to transform your vision into reality. We aim to provide:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Exceptional customer service</li>
            <li>Innovative event solutions</li>
            <li>Seamless execution of every detail</li>
            <li>Memorable experiences for you and your guests</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3 text-indigo-500">Achievements</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Over 500 successful events planned</li>
            <li>Recognized as the top event planner in the region for 3 consecutive years</li>
            <li>Partnerships with leading vendors and venues</li>
            <li>5-star customer satisfaction rating</li>
          </ul>
        </div>

        {/* Quotes Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3 text-indigo-500">Inspirational Quotes</h2>
          <blockquote className="italic text-gray-600 border-l-4 border-indigo-500 pl-4">
            "The best way to predict the future is to create it." - Peter Drucker
          </blockquote>
          <blockquote className="italic text-gray-600 border-l-4 border-indigo-500 pl-4 mt-4">
            "Life is a party. Dress like it." - Audrey Hepburn
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
