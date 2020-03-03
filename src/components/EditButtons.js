import React from 'react';

class EditButtons extends React.Component {
    
    // state = {
    //     editForm: false
    // }

    // showEditForm = () => {
    //     <form onSubmit={handleEdit}>

    //     </form>
    // }

    
    handleEdit = (id) => {
        console.log('edit button')
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cart_id: this.props.currentUser.cart.id
            })
        })
    }

    handleDelete = (id) => {
        console.log('testing delete')
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data => console.log(data))
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => this.handleEdit(this.props.currentProductId)}>Edit</button>
                <button onClick={() => this.handleDelete(this.props.currentProductId)}>Delete</button>
            </div>
        )
    }
}

export default EditButtons;