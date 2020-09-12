import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { sum } from '../core/math';

function App() {
  const [serverResult, setServerResult] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch('http://localhost:3003/ping');
      console.log(result && result);

      const newServerResult = await result.json();

      setServerResult(newServerResult);
    })();
  }, []);
  console.log(serverResult && serverResult);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Client result {sum(1, 3)}</p>
        <p>Server result {serverResult}</p>
      </header>
    </div>
  );
}

export default App;
