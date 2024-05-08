import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-background">
      <nav>
        hel
      </nav>
      <div style={{height: '10vh'}}></div>

      <div className="App">
          <h1>Galactic Mining Game</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <dev style={{display: 'grid'}}>
            <label>
              Username: <input type="text" name="name"/>
            </label>
      
            <label>
              Password: <input type="text" name="name" />
            </label>
          </dev>
      </div>
    </div>
  );
}

export default App;