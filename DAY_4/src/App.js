import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Make sure to import AuthProvider
import LandingPage from './sections/LandingPage';
import Home from './sections/Home';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';
import Services from './sections/Services';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider } from './AuthContext';
// import LandingPage from './sections/LandingPage';
// import Home from './sections/Home';
// import AboutUs from './sections/AboutUs';
// import Contact from './sections/Contact';
// import Services from './sections/Services';
// import Signup from './components/Signup';
// import Login from './components/Login';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route 
//             path="/home" 
//             element={<Home />} 
//           />
//           <Route 
//             path="/about-us" 
//             element={<AboutUs />} 
//           />
//           <Route 
//             path="/contact" 
//             element={<Contact />} 
//           />
//           <Route 
//             path="/services" 
//             element={<Services />} 
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
