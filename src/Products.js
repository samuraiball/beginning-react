import React ,{Component} from 'react'

class Products extends Component {
    render() {

        const products = ["Learning React","Pro React", "Beginning React"];

        const productsList = products.map((product)=>
            <li key={product.toString()}>
                {product}
            </li>
        )

        return (
            <div>
                <ul>
                    {productsList}
                </ul>
            </div>
        );
    }

}

export default Products;