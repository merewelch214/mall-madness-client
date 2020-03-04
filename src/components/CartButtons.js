import React from 'react';

class CartButtons extends React.Component {
 
    addToCart = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cart_id: this.props.currentProduct.currentUser.cart.id
            })
        })
        .then(resp => resp.json())
        .then(data => this.props.updateProducts(data))
    }

    removeFromCart = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cart_id: null
            })
        })
        .then(resp => resp.json())
        .then(data => this.props.updateProducts(data))
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
            { this.props.currentProduct.cart_id ?
                <button onClick={() => this.removeFromCart(this.props.currentProduct.id)}>Remove from Cart</button> : 
                <button onClick={() => this.addToCart(this.props.currentProduct.id)}>Add to Cart</button> }
            </div>
        )
    }
}

export default CartButtons;