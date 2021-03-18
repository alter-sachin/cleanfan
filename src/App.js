import './App.css';
import Chatbot from './Chatbot.js';
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Talk <code>to BuildAR's</code> Sophie.
        </p>
        <Chatbot />
      </header>
    </div>
  );
}

export default App;
