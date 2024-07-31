import HomeNavbar from "../components/HomeNavbar";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg mt-16">
      <HomeNavbar/>
      <h2 className="text-4xl font-bold mb-6 text-center animated-gradient-text">Contact Us</h2>
      <p className="text-lg text-center mb-4 neon-text">We'd love to hear from you! Follow us on social media:</p>
      <SocialMediaIcons />
      
      <div className="flex flex-col md:flex-row mt-8">
        {/* Contact Information Section */}
        <div className="flex-1 mb-6 md:mr-4">
          <h3 className="text-2xl font-semibold gradient-text mb-4">Contact Information</h3>
          <p className="text-lg text-gray-200 mb-2">Email: <a href="mailto:info@example.com" className="text-gray-100 underline neon-text">info@example.com</a></p>
          <p className="text-lg text-gray-200 mb-2">Phone: <a href="tel:+1234567890" className="text-gray-100 underline neon-text">+1 234 567 890</a></p>
          <p className="text-lg text-gray-200 mb-2">Address: <span className="text-gray-100 glitch-text" data-text="123 Party Lane, Celebration City, CA 12345">123 Party Lane, Celebration City, CA 12345</span></p>
        </div>

        {/* Feedback Form Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold gradient-text mb-4">Feedback Form</h3>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 neon-text">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;