import React from 'react';
import CartButtons from './CartButtons'
import EditButtons from './EditButtons'

class Product extends React.Component {

    state = {
        inCart: !!this.props.cart_id 
    }
    
    render(){
        const userType = this.props.currentUser.role
        const cartId = this.props.cart_id
        let buttons;

        if (userType !== 'owner'){
            if ((cartId === this.props.currentUser.cart.id || cartId === null) && userType === 'shopper') {            
                buttons = <CartButtons currentProduct={this.props} inCart={this.state.inCart} updateProducts={this.props.updateProducts}/>
            } else if (userType === 'shopper' && cartId) {
                buttons = <p>This product is out of stock.</p>
            }
        } else if (userType === 'owner' && cartId === null) {
            buttons = <EditButtons currentProduct={this.props} inCart={this.state.inCart} updateProducts={this.props.updateProducts}/>
        } else if (userType === 'owner' && cartId) {
            buttons = <p>This product has sold!</p>
        } 

        return (    
        <div className={"product-card"}>
            <h2 className="product-title">{this.props.name}</h2><br/>
            <img className="product-img" src={this.props.img_url} alt={this.props.name}/><br/>
        <p className="product-description">{this.props.description} - ${this.props.price}</p>
            {buttons}
        </div>
        )
    }
}

export default Product;

// if the user is an owner and product has not sold, show them edit / delete buttons
// if the user is an owner and the product has sold, do not show any buttons
// if the user is a shopper and the product does not have a cart id, show them an add to cart button
// if the user is a shopper and the product has a cart id, but it is not their cart, show them the product is out of stock
// if the user is a shopper and the product is in their cart, show them a message that it's intheir cart
// in the Cart component, add a remove from cart button