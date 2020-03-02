import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'

class Store extends React.Component {

    state = {
        displayForm: false,
        store: {}
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

    componentDidMount(){
        if (this.props.currentUser.role === 'owner'){
            fetch(`http://localhost:3000/showBasedOnOwner/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(store => {
                this.setState({ store: store })
            })
        } else {
            this.setState({ store: this.props })
        }
    }

    render(){
        console.log(this.state)
        const { name, products, id } = this.state.store
        return (
            <div>
                <h2>{name}</h2>
                {products ? products.map(product => {
                    return <Product key={product.id} {...product} />
                }) : null}
                {this.props.currentUser.role === 'owner' ? <button onClick={this.changeDisplayForm}>Toggle Form</button> : <div><h1> ---------- </h1>
                <button onClick={this.props.revertChosen}>Back To Mall View</button></div>}
                {this.state.displayForm ? <ProductForm id={id} submitNewProduct={this.submitNewProduct} /> : null}
            </div>
        )
    }
}

export default Store;