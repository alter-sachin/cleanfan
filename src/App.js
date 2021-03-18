import './App.css';
import Chatbot from './Chatbot.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../public/Logo_BuildAR_full.png" className="App-logo" alt="logo" />
        <p>
          Talk <code>to BuildAR's</code> Sophie.
        </p>
        <Chatbot />
      </header>
    </div>
  );
}

export default App;
