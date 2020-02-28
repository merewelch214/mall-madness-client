import React from 'react';
import Product from '../components/Product'
import ProductForm from '../components/ProductForm'

class Store extends React.Component {

    state = {
        displayMore: false,
        displayForm: false
    }

    changeDisplayMore = () => {
        this.setState({ displayMore: !this.state.displayMore, displayForm: false })
    }

    changeDisplayForm = () => {
        this.setState({ displayForm: !this.state.displayForm })
    }

    render(){
        // console.log(this.props.name, "products are", this.props.products)
        return (
            <div>
                <h2 onClick={this.changeDisplayMore}>{this.props.name}</h2>
                {this.state.displayMore ? this.props.products.map(product => {
                    return <Product key={product.id} {...product} />
                }) : null}
                {this.state.displayMore ? <button onClick={this.changeDisplayForm}>Toggle Form</button> : null }
                {this.state.displayMore && this.state.displayForm ? <ProductForm /> : null}
                
                {/* <Product parent={"store"}/> */}
                <h1> ---------- </h1>
            </div>
        )
    }
}

export default Store;