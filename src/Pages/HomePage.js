import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocket  from '../Images/rocket.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../Styling/App.css';

function HomePage() {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/User/SignIn');
  };

  const goToLogIn = () => {
    navigate('/User/LogIn');
  };

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

        <h1 className="Secondary" style={{ color: 'var(--secondary-color)' }}>Galactic Mining Game</h1>
        <div className="App-logo">
          <img style={{ height: '10vh', rotate: '45deg' }} src={rocket} alt="rocket" />
        </div>
      
        <div style={{ height: '5vh' }} />

        <div style={{justifyContent: 'center', display: 'grid' }}>
            <Button style={{margin: '1vh'}} onClick={goToSignIn}>
            Sign In
            </Button>

            <Button style={{margin: '1vh'}} onClick={goToLogIn}>
            Log In
            </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;