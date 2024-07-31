import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import '../styles.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check if username or password is empty
    if (!username || !password) {
      setError('Username and Password are required.');
      return;
    }

    try {
      // Check if the user already exists
      const response = await axios.get(`http://localhost:3001/users?username=${username}`);
      if (response.data.length > 0) {
        setError('Username already taken.');
        return;
      }

      // If user doesn't exist, create a new user
      await axios.post('http://localhost:3001/users', { username, password });
      setSuccess('User registered successfully!');
      setUsername('');
      setPassword('');
      nav
    } catch (error) {
      setError('An error occurred while registering the user.');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-blue-500 p-6 rounded-lg shadow-lg'>
        <h1 className='text-center text-white mb-4 text-2xl font-bold'>Sign Up</h1>
        {error && <p className='error'>{error}</p>} {/* Use custom CSS class */}
        {success && <p className='success'>{success}</p>} {/* Use custom CSS class */}
        <form onSubmit={handleSignUp} className='space-y-4'>
          <div>
            <label className='block text-white mb-1 font-bold'>Username:</label>
            <input 
              type='text' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter username' 
              className='w-full p-2 border rounded'
            />
          </div>
          <div>
            <label className='block text-white mb-1 font-bold'>Password:</label>
            <input 
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password' 
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='bg-white text-black rounded py-2 px-4 font-bold'>
              Sign Up
            </button>
          </div>
        </form>
        <div className='flex justify-center mt-4'>
          <p className='text-white'>Already have an account? <Link to="/login" className='text-red-400 hover:text-black font-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
