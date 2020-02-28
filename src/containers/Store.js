import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'

class Store extends React.Component {
    render(){
        return (
            <div>
                <h1>Store</h1>
                <Product parent={"store"}/>
                <ProductForm />
            </div>
        )
    }
}

export default Store;