import React, {Component} from 'react';
import {Media} from 'react-bootstrap';
import Rating from './Rating';


class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={this.props.data.imageUrl} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            {this.props.data.productName}
                        </Media.Heading> {
                        this.props.data.releasedDate}
                        <Rating
                            rating={this.props.data.rating}
                            numOfReviews={this.props.data.numOfReviews}
                        />
                        <p>{this.props.data.description}</p>
                    </Media.Body>
                </Media>

            </div>
        );
    }
}

export default Product;