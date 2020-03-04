import React from 'react';

class StoreForm extends React.Component {
    state = {
        name: '',
        category: ''
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        fetch(`http://localhost:3000/stores/${this.props.currentUser.store.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp=>resp.json)
        .then(data=>console.log(data))
    }
    
    render(){
        return (
        <div>
            <h1> Create Your Store </h1>
            <form id='create-store-form' onSubmit={console.log(this.state)}>
                <label>Name: </label>
                <input type='text' name='name' value={this.state.name}  placeholder="Store Name" onChange={this.updateState} /><br />
                <label>Category: </label>
                <select name='category' value={this.state.category} onChange={this.updateState}>
                    <option value='Accessories'>Accessories</option>
                    <option value='Books'>Books</option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Department'>Department</option>
                    <option value='Food'>Food</option>
                    <option value='Home Goods'>Home Goods</option>
                    <option value='Music'>Music</option>
                    <option value='Novelty'>Novelty</option>
                    <option value='Other'>Other</option>
                </select>
            <br />
            <input type='submit' value='Add Store' />

        </form>
    </div>
        )
    }
}

export default StoreForm;