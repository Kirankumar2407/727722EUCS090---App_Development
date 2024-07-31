// src/pages/EventsPage.js
import { useParams } from 'react-router-dom';
import { events } from '../utils/eventData';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const EventsPage = () => {
  const { topic } = useParams();
  console.log("Topic from URL:", topic); // Debugging log

  const selectedEvent = events.find(event => event.title.replace(/\s+/g, '-').toLowerCase() === topic);
  console.log("Selected Event:", selectedEvent); // Debugging log

  // State for form fields
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [beverages, setBeverages] = useState('');
  const [food, setFood] = useState('');
  const [expecting, setExpecting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or log it)
    console.log({ age, gender, date, time, place, beverages, food, expecting });
    // Reset form fields
    setAge('');
    setGender('');
    setDate('');
    setTime('');
    setPlace('');
    setBeverages('');
    setFood('');
    setExpecting('');
  };

  return (
    <div className="container mx-auto py-12 mt-10">
      {selectedEvent ? (
        <>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Plan Your {selectedEvent.title}</h2>

            {selectedEvent.title === "Birthday Parties" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                  <select
                    id="age"
                    value={age}
                    onChange={(e) => {setAge(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select age</option>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(ageOption => (
                      <option key={ageOption} value={ageOption}>{ageOption}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => {setGender(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>
              </>
            )}

            {selectedEvent.title === "Graduation Parties" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="beverages">Beverages</label>
                  <input
                    type="text"
                    id="beverages"
                    value={beverages}
                    onChange={(e) => setBeverages(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="food">Food</label>
                  <input
                    type="text"
                    id="food"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </>
            )}

            {selectedEvent.title === "Holiday Parties" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="beverages">Beverages</label>
                  <input
                    type="text"
                    id="beverages"
                    value={beverages}
                    onChange={(e) => {setBeverages(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="food">Food</label>
                  <input
                    type="text"
                    id="food"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </>
            )}
            {selectedEvent.title === "Holiday Parties" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="beverages">Beverages</label>
                  <input
                    type="text"
                    id="beverages"
                    value={beverages}
                    onChange={(e) => {setBeverages(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="food">Food</label>
                  <input
                    type="text"
                    id="food"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </>
            )}
            {selectedEvent.title === "Bachelor Party" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="beverages">Beverages</label>
                  <input
                    type="text"
                    id="beverages"
                    value={beverages}
                    onChange={(e) => {setBeverages(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="food">Food</label>
                  <input
                    type="text"
                    id="food"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </>
            )}
            {selectedEvent.title === "Retirement Party" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="beverages">Beverages</label>
                  <input
                    type="text"
                    id="beverages"
                    value={beverages}
                    onChange={(e) => {setBeverages(e.target.value)}}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="food">Food</label>
                  <input
                    type="text"
                    id="food"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="expecting">Expecting</label>
              <textarea
                id="expecting"
                value={expecting}
                onChange={(e) => setExpecting(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 h-32 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <h1 className="text-4xl font-bold mb-8 text-center">No Events Found</h1>
      )}
    </div>
  );
};

export default EventsPage;