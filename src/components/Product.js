import React from 'react';

class Product extends React.Component {
    render(){
        return (
        <h1>{this.props.parent} Product</h1>
        )
    }
}

export default Product;