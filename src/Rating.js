import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {rating: this.props.rating};
    }

    handleClick(ratingVals) {
        this.setState({rating: ratingVals});
    }


    render() {
        const styles = {
            startStyle: {
                color: 'orange'
            }
        };
        return (
                <div style={styles.startStyle}>
                    <Glyphicon
                        glyph={this.state.rating >= 1 ? 'star' : 'star-empty'}
                        id="container"
                        onClick={this.handleClick.bind(this, 1)}
                    />
                    <Glyphicon
                        onClick={this.handleClick.bind(this, 2)}
                        id="container"
                        glyph={this.state.rating >= 2 ? "star" : "star-empty"}
                    />
                    <Glyphicon
                        glyph={this.state.rating >= 3 ? "star" : "star-empty"}
                        id="container"
                        onClick={this.handleClick.bind(this, 3)}
                    />
                    <Glyphicon
                        glyph={this.state.rating >= 4 ? "star" : "star-empty"}
                        id="container"
                        onClick={this.handleClick.bind(this, 4)}
                    />
                    <Glyphicon
                        glyph={this.state.rating >= 5 ? "star" : "star-empty"}
                        id="container"
                        onClick={this.handleClick.bind(this, 5)}
                    />
                    {this.props.numOfReviews}
                </div>
        )
    }
}

export default Rating;
