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
        console.log('state:', this.state )
        console.log('props', this.props)
        const { products } = this.state
  
        return (
            <div>
                <h1>Cart</h1>
                {products ? products.map(product => {
                    return <Product key={product.id} currentUser={this.props.currentUser} {...product} />
                }) : 'Your cart is empty.'}
            </div>
        )
    }
}

export default Cart;