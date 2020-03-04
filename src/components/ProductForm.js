import React from 'react';

class ProductForm extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
        image: '',
        store_id: this.props.id
    }

    updateState = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitNewProduct(this.state)
        this.setState({ name: '', description: '', price: '', image: '' })
    }

    render() {
        return (
            <form id='create-product-form' onSubmit={this.submitHandler}>

                <label>Name: </label>
                <input onChange={this.updateState} name='name' value={this.state.name} type='text' placeholder="add your name here.." /><br />

                <label>Description: </label>
                <input onChange={this.updateState} name='description' value={this.state.description} type='text' placeholder="add your description here..." /><br />

                <label>Price: </label>
                <input onChange={this.updateState} name='price' value={this.state.price} type='text' placeholder="add your price here..." /><br />

                <label>Image: </label>
                <input onChange={this.updateState} name='image' value={this.state.image} type='text' placeholder="add your image url here..." /><br />

                <br />

                <input type='submit' value='Add Product' />

            </form>
        )
    }
}

export default ProductForm;