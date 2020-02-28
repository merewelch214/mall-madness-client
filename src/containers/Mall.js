import React from 'react';
import StoreForm from '../components/StoreForm'
import Store from './Store'
import Cart from './Cart'

class MallContainer extends React.Component {
    render(){
        return (
            <div>
                <h1>Mall</h1>
                <StoreForm />
                <Store />
                <Cart />
            </div>
        )
    }
};


export default MallContainer