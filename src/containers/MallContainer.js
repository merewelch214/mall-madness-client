import React from 'react';
import StoreForm from '../components/StoreForm'
import Store from './Store'
import Cart from './Cart'
import StoreList from '../components/StoreList'

class MallContainer extends React.Component {

    state = {
        stores: [],
        chosenStore: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/stores')
        .then(response => response.json())
        .then(stores => this.setState({ stores: stores }))
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
        console.log('rendered mall') 
        return (
            <div>
                {this.state.chosenStore ? <Store key={this.state.chosenStore.id} {...this.state.chosenStore} revertChosen={this.revertChosen}/> 
                : <div><h1>Mall Madness!</h1> <h1>-------------</h1><br />
                <h1>Please select a store:</h1> {this.state.stores.map(store => {
                    return <StoreList setStore={this.setStore} key={store.id} store={store} />
                })}</div>}
                {this.state.stores ? null : <StoreForm /> }
                <Cart />
            </div>
        )
    }
};


export default MallContainer