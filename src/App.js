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
                <Button bsStyle="primary" disabled={!isValid}>Default</Button>

                <Rating rating="1"/>
                <Rating rating="2"/>
                <Rating rating="3"/>
                <Rating rating="4"/>

            </div>
        );
    }
}

export default App;
