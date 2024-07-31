import EventCard from "../components/EventCard";
import { events } from "../utils/eventData";
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (eventType) => {
    navigate('/event-form', { state: { eventType } }); // Navigate to EventForm with event type
  };

  return (
    <div id="services">
      <HomeNavbar />
      <div className="container mx-auto px-4 pt-24">
        <h2 className="text-4xl font-bold mb-8 text-center text-black animated-gradient-text">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {events.slice(0, 9).map((event, index) => (
            <div key={index} className="flex justify-center" onClick={() => handleCardClick(event.title)}>
              <div className="transition-transform duration-300 hover:scale-105 w-full max-w-xs">
                <EventCard {...event} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;