import React, {Component} from 'react';
import './App.css';
import Products from './Products';
import  JumboTronComponent from './JumboTronComponent';

class App extends Component {
    render() {

        const isValid = true;

        return (
            <div>
                <h1>My first APP!!!</h1>
                <Products/>
                <JumboTronComponent>
                    support
                </JumboTronComponent>
            </div>
        );
    }
}

export default App;
