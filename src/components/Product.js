import React from 'react';
import CartButtons from './CartButtons'
import EditButtons from './EditButtons'

class Product extends React.Component {
    state = {
        inCart: false
    }

    render(){
        console.log(this.props)
        return (
        <div>
            <h1>{this.props.name}</h1>
            <img src={this.props.img_url} alt={this.props.name}/>
            {this.props.currentUser.role === 'shopper' ? 
                <CartButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/> :
                <EditButtons currentUser={this.props.currentUser} currentProductId={this.props.id}/> }
        </div>
        )
    }
}

export default Product;