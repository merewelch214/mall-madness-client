import React from 'react';
import Product from '../components/Product'

class Cart extends React.Component {
    
    componentDidMount() {
        fetch(`http://localhost:3000/carts`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    
    render(){
        return (
            <div>
                <h1>Cart</h1>
                <Product parent={"cart"}/>
            </div>
        )
    }
}

export default Cart;