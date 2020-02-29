import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        console.log('handle the login')
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
                <button type="submit" value="Submit" disabled={!this.state.role}> Log in </button>
            </form>
        )
    }
}

export default Login;