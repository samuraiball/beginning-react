import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


class UserForm extends Component {
    constructor(props) {
        super(props);
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
        const length = this.state.username;

        //一度でもフォーカスが当たればValidationをかける
        if (this.state.usernameTouched) {
            if (length < 3) return 'error';
            else return 'success';
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
        this.setState({value: e.target.value})
    }

    handleBlur(e) {
        const target = e.target;
        const name = target.name;
        console.log(name)
        this.setState({
            [name + 'Touched']: true
        });
       console.log(this.state.passwordTouched)
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
                    <HelpBlock>Validation is based on string length.</HelpBlock>
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
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>
        )
    }
}

export default UserForm;