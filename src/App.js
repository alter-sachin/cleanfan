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
        <Chatbot />
      </header>
    </div>
  );
}

export default App;
