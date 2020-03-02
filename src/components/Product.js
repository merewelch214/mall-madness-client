import React from 'react';

class Product extends React.Component {
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
        .then(resp=>resp.json())
        .then(data=>console.log(data))
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
        .then(resp=>resp.json())
        .then(data=>console.log(data))    
    }
    
    render(){
        return (
        <div>
            <h1>{this.props.name}</h1>
            <img src={this.props.img_url} alt={this.props.name}/>
            {this.state.inCart ? 
                <button onClick={() => this.removeFromCart(this.props.id)}>Remove from Cart</button> : 
                <button onClick={() => this.addToCart(this.props.id)}>Add to Cart</button>}
        </div>
        )
    }
}

export default Product;