import React from 'react';

class CartButtons extends React.Component {

    state = {
        inCart: false
    }

    addToCart = (id) => {
        this.setState({
            inCart: true
        })
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cart_id: this.props.currentUser.cart.id
            })
        })
    }

    removeFromCart = (id) => {
        this.setState({
            inCart: false
        })
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
    }

    render() {
        return (
            <div>
            { this.state.inCart ? 
                <button onClick={() => this.removeFromCart(this.props.currentProductId)}>Remove from Cart</button> : 
                <button onClick={() => this.addToCart(this.props.currentProductId)}>Add to Cart</button> }
            </div>
        )
    }
}

export default CartButtons;