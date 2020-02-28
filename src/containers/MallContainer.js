import React from 'react';
import StoreForm from '../components/StoreForm'
import Store from './Store'
import Cart from './Cart'

class MallContainer extends React.Component {

    state = {
        stores: [],
        products: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/stores')
        .then(response => response.json())
        .then(stores => this.setState({ stores: stores }))

        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => this.setState({ products: products }))
    }

    // listStores() {
    //     this.state.stores.map(store => {
    //         return <Store key={store.id} {...store} />
    //     })
    // }

    render(){
        // console.log(this.state.products) 
        return (
            <div>
                <h1>Mall</h1>
                <StoreForm />
                {this.state.stores.map(store => {
                    return <Store key={store.id} {...store} />
                })}
                <Cart />
            </div>
        )
    }
};


export default MallContainer