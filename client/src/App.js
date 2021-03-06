import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Restaurant from './pages/Restaurant';
import tokenService from './utils/tokenService';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TopBar from './components/TopBar';
import PageLayout from './components/PageLayout';

function App() {
  const [auth, setAuth] = useState(tokenService.getUserFromToken());
  const handleLogout = () => {
    tokenService.removeToken();
    setAuth(null);
  };
  const handleLogin = () => setAuth(tokenService.getUserFromToken());
  return (
    <div>
      <Router>
        <TopBar auth={auth} handleLogout={handleLogout} />
        <Route exact path="/" render={() =>  <PageLayout auth={auth} />} />
        <Route exact path="/signup" render={() => <SignUp handleLogin={handleLogin} />} />
        <Route exact path="/login" render={() => <Login handleLogin={handleLogin} />} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
      </Router>
    </div>
  );
}

export default App;
