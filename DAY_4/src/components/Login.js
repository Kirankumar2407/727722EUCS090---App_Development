import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
      if (response.data.length > 0) {
        setSuccess('Logged in successfully!');
        setUsername('');
        setPassword('');
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-blue-500 p-6 rounded-lg shadow-lg'>
        <h1 className='text-center text-white mb-4 text-xl font-bold'>Login</h1>
        {error && <p className='text-red-600'>{error}</p>}
        {success && <p className='text-green-600'>{success}</p>}
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-white mb-1 font-bold'>Username</label>
            <input 
              type='text' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter username' 
              className='w-full p-2 border rounded'
            />
          </div>
          <div>
            <label className='block text-white mb-1 font-bold'>Password</label>
            <input 
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password' 
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='bg-white text-black rounded py-2 px-4'>
              Login
            </button>
          </div>
        </form>
        <div className='flex justify-center mt-4'>
          <p className='text-white'>Don't have an account? <Link to="/signup" className='text-blue-600'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
