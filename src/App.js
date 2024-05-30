import rocket from './rocket.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div className="App-background Primary">
      <div className="App">
        <Dropdown data-bs-theme='dark'>
          <Dropdown.Toggle variant="success" id="dropdown-button">
            Additional Info
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Power BI</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h1 className="Secondary" style={{color: 'var(--secondary-color)'}}>Galactic Mining Game</h1>
        <div className="App-logo" >
          <img style={{height: '10vh', rotate: '45deg'}} src={rocket} alt="rocket" />
        </div>
      
        <div style={{height: '5vh'}}></div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr', gridGap: '10px'}}>
          <label style={{color: 'var(--secondary-color)'}}>
            Username: <input type="text" name="name"/>
          </label>

          <label style={{color: 'var(--secondary-color)'}}>
            Password: <input type="text" name="name"/>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;