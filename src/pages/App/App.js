import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Main from '../../Main'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: userService.getUser(),
        }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }


    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {/* <Route exact path="/" render={() => <LoginPage />} /> */}
                        <Route path="/" render={() => <SignupPage />} />
                        <Main />
                    </Switch>
                </Router>
            </div>
        )
    }
}
