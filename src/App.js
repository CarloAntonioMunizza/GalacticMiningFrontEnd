import rocket from './rocket.svg';
import './App.css';

function App() {
  return (
    <div className="App-background Primary">
      <nav style={{color: 'var(--secondary-color)'}}>
        hello
      </nav>
      <div style={{height: '10vh'}}></div>

      <div className="App">
          <h1 className="Secondary" style={{color: 'var(--secondary-color)'}}>Galactic Mining Game</h1>
          <img src={rocket} className="App-logo" alt="rocket" />
          <dev style={{display: 'grid'}}>
            <label style={{color: 'var(--secondary-color)'}}>
              Username: <input type="text" name="name"/>
            </label>
      
            <label style={{color: 'var(--secondary-color)'}}>
              Password: <input type="text" name="name"/>
            </label>
          </dev>
      </div>
    </div>
  );
}

export default App;