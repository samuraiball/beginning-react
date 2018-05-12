import React, {Component} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading'
import {Media, Form, FormGroup, FormControl, Button} from 'react-bootstrap'

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
            searchTerm: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm) {
        axios.get("http://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.items,
                });
                console.log(res.data.items);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: false,
        });
        this.getGitHubData(this.state.searchTerm);
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });
    }


    render() {

        const userList = this.state.data.map((user) =>
            <Media key={user.id}>
                <Media.Left>
                    <a href={user.html_url}>
                        <img width={64} height={64} src={user.avatar_url} alt="Image"/>
                    </a>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        {user.login}
                    </Media.Heading>
                    <p>Score:{user.score}</p>
                </Media.Body>
            </Media>
        );

        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineName">
                        <FormControl
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />

                    </FormGroup>
                    {''}
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>

                <h3>GitHub User Result</h3>
                {this.state.isLoading &&
                <ReactLoading type="spinningBubbles" color="#444"/>
                }
                {userList}
            </div>
        )
    };
}

export default GitHub;