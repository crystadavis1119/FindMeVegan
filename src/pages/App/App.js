import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Main from '../../Main'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
// import userService from '../../utils/userService';




export default function App () {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <LoginPage />} />
                    <Route path="/signup" render={() => <SignupPage />} />

                    <Main />
                </Switch>
            </Router>

        </div>
    )
}
