import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


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
            if (length < 3) return 'error';
            else return 'success';
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

    render() {
        return (
            <form>
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
                        type="text"
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
            </form>
        )
    }
}

export default UserForm;