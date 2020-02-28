import React from 'react';
import Product from '../components/Product'

class Cart extends React.Component {
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