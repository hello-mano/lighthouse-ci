import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/8/8b/Ft5_3mb.JPG'} className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>add a para</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" rel="noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <div className="preference">
    <label>Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
</div>

<div className="preference">
    <label>Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
</div>

    </div>
  );
}

export default App;
