import React, {Component} from 'react';
import './App.css';
import Products from './Products';
import  JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

class App extends Component {
    render() {

        const isValid = true;

        return (
            <div>
                <GitHub/>
                <h1>My first APP!!!</h1>
                <Products/>
                <JumboTronComponent>
                    support
                </JumboTronComponent>
                <UserForm/>
            </div>
        );
    }
}

export default App;
