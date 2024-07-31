import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';

function LandingPage() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <LandingNavbar showFullNavbar={false} />
      <h1 className="text-4xl font-bold mb-4">Party Event Management</h1>
      <p className="text-xl mb-6 text-center max-w-2xl">
        Welcome to our Party Event Management app! We make it easy to plan, organize, and manage your parties.
        Whether it's a birthday bash, wedding celebration, or corporate event, we have you covered.
      </p>
      <button
        onClick={navigateToSignUp}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-8 hover:bg-blue-600"
      >
        Get Started
      </button>
      <div className="flex space-x-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-72">
          <h2 className="text-2xl font-bold mb-2">Birthday Parties</h2>
          <p className="text-gray-700">
            Celebrate birthdays with style. Our app helps you plan the perfect birthday party, from venue selection to guest invitations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-72">
          <h2 className="text-2xl font-bold mb-2">Weddings</h2>
          <p className="text-gray-700">
            Make your special day unforgettable. Our wedding planning tools will ensure everything runs smoothly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-72">
          <h2 className="text-2xl font-bold mb-2">Corporate Events</h2>
          <p className="text-gray-700">
            Host professional corporate events with ease. Our app provides solutions for all your event management needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
