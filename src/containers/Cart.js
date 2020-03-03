import React from 'react';
import Product from '../components/Product'

class Cart extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/carts/${this.props.currentUser.cart.id}`)
        .then(response => response.json())
        .then(data => this.setState({products: data.products}))
    }
    
    render(){
            return (
            <div>
                <h1>Cart</h1>
                {this.state.products.length > 1 ? 'Items in your cart' : 'Your cart is empty'}
            </div>
        )
    }
}

export default Cart;
// this.products.map(product => product.name)