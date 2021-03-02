import React from 'react';
import logo from './jerry.gif'; /*photo by Google Images*/
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank You So Much For Visiting
        </p>
        <a
          className="App-link"
          href="https://github.com/Jiohning"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Github
        </a>
      </header>
    </div>
  );
}

export default App;
