import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'

class Store extends React.Component {

    state = {
        displayForm: false,
        products: this.props.products
    }

    submitNewProduct = (product) => {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(newProduct => this.setState({ products : [...this.state.products, newProduct] }))
    }

    changeDisplayForm = () => {
        this.setState({ displayForm: !this.state.displayForm })
    }

    render(){
        // console.log(this.props.name, "products are", this.props.products)
        return (
            <div>
                <h2>{this.props.name}</h2>
                {this.props.products.map(product => {
                    return <Product key={product.id} {...product} />
                })}
                <button onClick={this.changeDisplayForm}>Toggle Form</button>
                {this.state.displayForm ? <ProductForm id={this.props.id} submitNewProduct={this.submitNewProduct} /> : null}
                
                {/* <Product parent={"store"}/> */}
                <h1> ---------- </h1>
                <button onClick={this.props.revertChosen}>Back To Mall View</button>
            </div>
        )
    }
}

export default Store;