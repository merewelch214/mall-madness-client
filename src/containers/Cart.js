import React from 'react';
import Product from '../components/Product'

class Cart extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/carts/${this.props.currentUser.cart.id}`)
        .then(response => response.json())
        .then(data => console.log(data.products))
    }
    
    render(){
        return (
            <div>
                <h1>Cart</h1>
                {this.state.products.map(product => {
                    return <Product />})}
            </div>
        )
    }
}

export default Cart;