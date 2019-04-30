import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/menu';
import Menu from './components/menu';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="columns">
        <div class="column">
        <Project />
        </div>
        <div class="column">
        <Project />
        </div>
        <div class="column">
        <Project />
        </div>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link button is-light"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
