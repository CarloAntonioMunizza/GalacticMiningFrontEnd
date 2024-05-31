import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../Styling/App.css';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = () => {
    axios.post('https://localhost:3000/User/SignIn', { username, password })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="App-background Primary">
      <div className="App">
        <h1 className="Secondary" style={{ color: 'var(--secondary-color)' }}>Sign In</h1>
        <div style={{ height: '5vh' }} />

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '1vh' }}>
            <label style={{ color: 'var(--secondary-color)' }}>
              Username: <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            </label>

            <label style={{ color: 'var(--secondary-color)' }}>
              Password : <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
          </div>

          <Button style={{ marginLeft: '1vw' }} onClick={handleSignIn}>
            Submit
          </Button>
        </div>

        {message && <div style={{ color: 'var(--secondary-color)', marginTop: '1vh' }}>{message}</div>}
      </div>
    </div>
  );
}

export default SignInPage;