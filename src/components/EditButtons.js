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
                <button onClick={() => this.handleEdit(this.props.currentProductId)}>Edit</button>
                <button onClick={() => this.handleDelete(this.props.currentProductId)}>Delete</button>
            </div>
        )
    }
}

export default EditButtons;