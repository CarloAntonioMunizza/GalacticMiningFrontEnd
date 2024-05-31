import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Styling/App.css';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import LogInPage from './Pages/LogInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/User/SignIn" element={<SignInPage />} />
        <Route path="/User/LogIn" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default App;