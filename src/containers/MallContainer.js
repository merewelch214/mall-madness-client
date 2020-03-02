import React from 'react';
import StoreForm from '../components/StoreForm'
import Store from './Store'
import Cart from './Cart'
import StoreList from '../components/StoreList'

class MallContainer extends React.Component {

    state = {
        stores: [],
        products: [],
        chosenStore: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/stores')
        .then(response => response.json())
        .then(stores => this.setState({ stores: stores }))

        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => this.setState({ products: products }))
    }

    setStore = (store) => {
        this.setState({ chosenStore: store })
    }

    revertChosen = () => {
        this.setState({ chosenStore: '' })
    }

    // listStores() {
    //     this.state.stores.map(store => {
    //         return <Store key={store.id} {...store} />
    //     })
    // }

    render(){
        return (
            <div>
                {this.state.chosenStore ? <Store key={this.state.chosenStore.id} {...this.state.chosenStore} revertChosen={this.revertChosen} currentUser={this.props.currentUser}/> 
                : <div><h1>Mall Madness!</h1> <h1>-------------</h1><br />
                <h1>Please select a store:</h1> {this.state.stores.map(store => {
                    return <StoreList setStore={this.setStore} key={store.id} store={store} />
                })}</div>}
                {this.state.stores ? null : <StoreForm /> }
                <Cart currentUser={this.props.currentUser}/>
            </div>
        )
    }
};


export default MallContainer