import React from 'react';
import CartButtons from './CartButtons'
import EditButtons from './EditButtons'

class Product extends React.Component {

    getRightButtons = () => {
        console.log('hitting func')
        if (this.props.currentUser.role === 'shopper' && (!this.props.cart_id || this.props.cart_id === this.props.currentUser.cart.id)) {
            return <CartButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/>
        } else if (this.props.currentUser.role === 'shopper' && this.props.cart_id) {
            return <p>This product is out of stock.</p>
        } else if (this.props.currentUser.role === 'owner' && !this.props.cart_id) {
            return <EditButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/>
        } else if (this.props.currentUser.role === 'owner' && this.props.cart_id) {
            return <p>This product has sold!</p>
        }
    }
    
    render(){
        console.log(this.getRightButtons)
        const userType = this.props.currentUser.role
        const cartId = this.props.cart_id
        let buttons;

        if (userType === 'shopper' && (!cartId || cartId === this.props.currentUser.cart.id)) {
            buttons = <CartButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/>
        } else if (userType === 'shopper' && cartId) {
            buttons = <p>This product is out of stock.</p>
        } else if (userType === 'owner' && !cartId) {
            buttons = <EditButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/>
        } else if (userType === 'owner' && cartId) {
            buttons = <p>This product has sold!</p>
        }

        return (
        <div>
            <h1>{this.props.name}</h1>
            <img src={this.props.img_url} alt={this.props.name}/>
            {buttons}
        </div>
        )
    }
}

export default Product;

// if the user is an owner and product has not sold, show them edit / delete buttons
// if the user is an owner and the product has sold, do not show any buttons
// if the user is a shopper and the product does not have a cart id, show them an add button
// if the user is a shopper and the produt has a cart it, show them the product is out of stock