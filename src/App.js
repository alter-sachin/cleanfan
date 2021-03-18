import logo from './logo.svg';
import './App.css';
import Chatbot from './Chatbot.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Talk <code>to BuildAR's</code> Sophie.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CleanFanatic Video Chat
        </a>
        <Chatbot/>
      </header>
    </div>
  );
}

export default App;
