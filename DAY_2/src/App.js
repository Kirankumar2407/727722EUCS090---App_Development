import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  const [login, setLogin] = useState(true);

  const toggle = () => {
    setLogin(!login);
  };

  return (
    <div className="App">
      {login ? <Login toggle={toggle} /> : <Register toggle={toggle} />}
    </div>
  );
}

export default App;
