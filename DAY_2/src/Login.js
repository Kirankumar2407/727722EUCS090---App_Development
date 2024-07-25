import React, { useState } from 'react';

function Login({ toggle }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Logged in successfully');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={toggle}>Switch to Register</button>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
}

export default Login;
