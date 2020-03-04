import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'
import NavBar from '../components/NavBar'
import StoreForm from '../components/StoreForm'

class Store extends React.Component {

    state = {
        displayForm: false,
        store: {},
        products: []
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
                this.setState({ store: store, products: store.products })
            })
        } else {
            const matchingStore = this.props.stores.find(store => store.name === this.props.match.params.storeName)
            this.setState({ store: matchingStore, products: matchingStore.products })
        }
    }


    updateProducts = (product) => {
        const findMatch = (stateProduct) => stateProduct.id === product.id
        const index = this.state.products.findIndex(findMatch)
        let copyArray = this.state.products
        copyArray[index] = product 
        this.setState({
            products: copyArray
        })
    }

    render(){
        console.log(this.state.store)
        return (
            <div>
                <NavBar />
                {!!this.state.store.name ? <h2> {this.state.store.name} </h2>  : <StoreForm currentUser={this.props.currentUser}/> } 
                <div className="store-products-list">
                    {this.state.products ? this.state.products.map(product => {
                        return <Product key={product.id} currentUser={this.props.currentUser} {...product} updateProducts={this.updateProducts}/>
                    }) : null} 
                    {this.props.currentUser.role === 'owner' && !!this.state.store.name ? <button onClick={this.changeDisplayForm}>Add new product</button> : null}
                    {this.state.displayForm ? <ProductForm id={this.state.store.id} submitNewProduct={this.submitNewProduct} /> : null}
                </div>
            </div>
        )
    }
}

export default Store;