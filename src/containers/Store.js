import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'

class Store extends React.Component {

    state = {
        displayForm: false
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
                {this.state.displayForm ? <ProductForm /> : null}
                
                {/* <Product parent={"store"}/> */}
                <h1> ---------- </h1>
                <button onClick={this.props.revertChosen}>Back To Mall View</button>
            </div>
        )
    }
}

export default Store;