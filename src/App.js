import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating'

class App extends Component {
    render() {

        const isValid = true;

        return (
            <div>
                <h1>My first APP!!!</h1>
                <Products/>
            </div>
        );
    }
}

export default App;
