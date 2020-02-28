import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        role: '',
        users: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => this.setState({ users: users }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('this will change later')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Username:
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>Password:
                <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>
                </label>
                <label>Role: 
                    <select name='role' value={this.state.role} onChange={this.handleChange}>
                        <option name='role' value=''>Select role</option>
                        <option name='role' value='owner'>Owner</option>
                        <option name='role' value='shopper'>Shopper</option>
                    </select>
                </label>
                <button type="submit" value="Submit" disabled={!this.state.role}> Submit </button>
            </form>
        )
    }
}

export default Login;