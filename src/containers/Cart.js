import React from 'react';
import Product from '../components/Product'
import NavBar from '../components/NavBar'

class Cart extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/carts/${this.props.currentUser.cart.id}`)
        .then(response => response.json())
        .then(data => this.setState({products: data.products}))
    }

    updateProducts = (product) => {
        const newProds = this.state.products.filter( stateProduct => stateProduct.id !== product.id)
        this.setState({ products: newProds})
    }
    
    render(){
        const { products } = this.state
  
        return (
            <div>
                <NavBar />
                <h1>Cart</h1>
                {products ? products.map(product => {
                    return <Product key={product.id} currentUser={this.props.currentUser} {...product} updateProducts={this.updateProducts} />
                }) : 'Your cart is empty.'}
            </div>
        )
    }
}

export default Cart;