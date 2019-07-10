import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../../Main'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService';


class App extends Component {
    constructor() {
        super();
        this.state = {

        };
        user: userService.getUser()
    }
}

export default App
