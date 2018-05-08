import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';


class UserForm extends Component {
    errorUsername;
    errorPassword;

    login(password, username) {

        if (username === "jason" && password === "123") {
            return true;
        }
        else return false;
    }

    constructor(props) {
        super(props);
        this.errorPassword = '';
        this.errorUsername = '';

        this.state = {
            username: '',
            password: '',
            usernameTouched: false,
            passwordTouched: false,
            errorLogin: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.canBeSubmitted(this);
    }


    getUserNameValidationState() {
        const length = this.state.username.length;

        //一度でもフォーカスが当たればValidationをかける
        if (this.state.usernameTouched) {
            if (length === 0) {
                this.errorUsername = 'Username is required';
                return 'error';
            }
            else if (length < 3) {
                this.errorUsername = 'Username should be minimum 3 characters';
                return 'error';
            }
            else if (this.state.username.indexOf(' ') >= 0) {
                this.errorUsername = 'Username cannot contain spaces';
                return 'error';
            }
            else {
                this.errorUsername = '';
                return 'success';
            }
        }
    }


    canBeSubmitted() {
        return (
            this.state.usernameTouched && this.state.passwordTouched
            && this.errorUsername.length === 0 && this.errorPassword.length === 0
        )
    }

    getPasswordValidationState() {
        const length = this.state.password.length;
        //一度でもフォーカスが当たればValidationをかける
        if (this.state.passwordTouched) {
            if (length === 0) {
                this.errorPassword = 'Password';
                return 'error';
            }
            else if (length < 8) {
                this.errorPassword = 'Password has to be more than 8';
                return 'error';
            }
            else if (length < 10) {
                this.errorPassword = 'Password should be more than 10';
                return 'warning';
            }
            else {
                this.errorPassword = '';
                return 'success'
            }

        }
    }


    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleBlur(e) {
        const target = e.target;
        const name = target.name;
        console.log(name)
        this.setState({
            [name + 'Touched']: true
        });
    }

    handleSubmit(event) {
        this.errorLogin = false;

        if (!this.canBeSubmitted()) {
            event.preventDefault();
            return;
        }
        else {
            if (!this.login(this.state.password, this.state.username)) {
                this.setState({
                    errorLogin: true,
                });
                event.preventDefault();
                console.log("Login Invalid");
                return;
            }
        }
        this.setState({
            errorLogin: false,
        });
        alert('User Name:' + this.state.username
            + '\nPassword:' + this.state.password)
    }

    render() {

        const isEnable = this.canBeSubmitted();

        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getUserNameValidationState()}
                >
                    <ControlLabel>User Name</ControlLabel>
                    <FormControl
                        name="username"
                        type="text"
                        value={this.state.username}
                        placeholder="Enter User Name"
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>
                        {this.errorUsername.length > 0 &&
                        <HelpBlock>{this.errorUsername}</HelpBlock>}</HelpBlock>
                </FormGroup>

                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getPasswordValidationState()}
                >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <FormControl.Feedback/>
                    {this.errorPassword.length > 0 &&
                    <HelpBlock>{this.errorPassword}</HelpBlock>}
                    <FormControl.Feedback/>
                </FormGroup>
                <Button type="submit" disabled={!isEnable}>
                    Submit
                </Button>
                {
                    this.state.errorLogin &&
                    <Alert bsStyle="danger"> <strong>Error</strong> Username or password is invalid. </Alert>
                }
            </form>
        )
    }
}

export default UserForm;