import React from 'react';

class EditButtons extends React.Component {
    
    state = {
        name: '',
        description: '',
        price: '',
        image: '',
        store_id: this.props.id,
        editFormToggle: false
    }

    editFormToggle = () => {
        this.setState({
            editFormToggle: !this.state.editFormToggle
        })
    }

    showEditForm = () => {
        return(
            <form>
                <input type='text'>Name</input>
            </form>
        )
    }

    
    handleEdit = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: 'new name',
                description: 'new price',
                price: 'new price',
                img_url: 'new image'  
            })
        })
    }

    handleDelete = (id) => {
        // to do: remove product
        console.log('testing delete')
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.editFormToggle ? this.showEditForm : null}>Edit</button>
                <button onClick={() => this.handleDelete(this.props.currentProduct.id)}>Delete</button>
            </div>
        )
    }
}

export default EditButtons;