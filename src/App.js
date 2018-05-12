import React, {Component} from 'react';
import './App.css';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import GitHubUser from './GitHubUser';
// import Products from './Products';
// import  JumboTronComponent from './JumboTronComponent';
// import UserForm from './UserForm';


class App extends Component {
    render() {

        const isValid = true;

        return (
            <div>
                <Header/>
                {/*before chapter 6*/}
                {/*<h1>My first APP!!!</h1>*/}
                {/*<Products/>*/}
                {/*<JumboTronComponent>*/}
                {/*support*/}
                {/*</JumboTronComponent>*/}
                {/*<UserForm/>*/}
            </div>
        );
    }
}

export default App;

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">React-BootStrap</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem>
                                {/*ここでaタグのhrefとかを使うとすべてのページがリロードされる*/}
                                <Link to="/github">GitHub</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route path="/github/user/:login/:score" component={GitHubUser}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/github" component={GitHub}/>
                        {/*exact がないと/githubが呼ばれた際にHomeとGitHubどちらも呼ばれてしまう。*/}
                        <Route path="/*" component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )

    }
}

class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class NotFound extends Component {
    render() {
        return (
            <div>
                NotFound
            </div>
        )
    }
}

