import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';


class UserForm extends Component {
    errorUsername;
    errorPassword;

    constructor(props) {
        super(props);
        this.errorPassword = '';
        this.errorUsername = '';

        this.state = {
            username: '',
            password: '',
            usernameTouched: false,
            passwordTouched: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit(this)
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
                return 'warning';
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

    handleSubmit(e) {
        alert('User Name:' + this.state.username
            + '\nPassword:' + this.state.password)
    }

    render() {
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
                <Button type="submit">
                    Submit
                </Button>
            </form>
        )
    }
}

export default UserForm;