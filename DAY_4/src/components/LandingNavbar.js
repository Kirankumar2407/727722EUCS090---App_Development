import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showFullNavbar }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-white shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">K3 Events Planner</div>
        <div className="space-x-4">
          {showFullNavbar ? (
            <>
              <Link to="/services" className="text-gray-700 hover:text-indigo-500">Services</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-indigo-500">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-500">Contact</Link>
              <Link to="/logout" className="text-gray-700 hover:text-indigo-500">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-indigo-500">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-indigo-500">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// components/LandingNavbar.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const LandingNavbar = ({ showFullNavbar = false }) => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-10 bg-blue-500 shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-white text-xl font-bold">Party Planner</div>
//         <div className="space-x-4">
//           {showFullNavbar ? (
//             <>
//               <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
//               <Link to="/about-us" className="text-white hover:text-gray-200">About Us</Link>
//               <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
//               <Link to="/" className="text-white hover:text-gray-200" onClick={() => {
//                 localStorage.removeItem('user');
//               }}>Logout</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
//               <Link to="/signup" className="text-white hover:text-gray-200">Sign Up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default LandingNavbar;
