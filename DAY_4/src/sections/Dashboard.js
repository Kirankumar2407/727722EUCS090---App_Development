// src/sections/Dashboard.js

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import EventForm from '../components/EventForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext); // Get the user from context
  const [events, setEvents] = useState([]); // State to hold the events

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3001/events'); // Fetch events from the JSON server
      const data = await response.json();
      setEvents(data); // Set the events state with fetched data
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  return (
    <div className="container mx-auto px-4 pt-24">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">Admin Dashboard</h2>
      <div className="bg-white p-8 rounded shadow-md mb-8">
        <h3 className="text-2xl font-bold mb-4">User Information</h3>
        <div className="mb-4">
          <span className="font-bold">Email:</span> {user.email}
        </div>
        <div className="mb-4">
          <span className="font-bold">Role:</span> {user.role}
        </div>
      </div>
      <div className="bg-white p-8 rounded shadow-md mt-8">
        <h3 className="text-2xl font-bold mb-4">Events</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="mb-2">
              <strong>Event Type:</strong> {event.eventType}, <strong>Age Group:</strong> {event.ageGroup}, <strong>Gender:</strong> {event.gender}, <strong>Beverages:</strong> {event.beverages}, <strong>Venue:</strong> {event.venue}, <strong>Contact No:</strong> {event.contactNo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;