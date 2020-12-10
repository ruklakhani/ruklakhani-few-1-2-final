// import { HashRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import MetalMeta from './MetalMeta.js';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
