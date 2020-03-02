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
        event.preventDefault()
        fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'},
                body: JSON.stringify({ 
                    username: this.state.username, 
                    password: this.state.password
                    })
            })
            .then(response => response.json())
            .then(response => {
                if (response.errors){
                    alert(response.errors)
                } else {
                this.props.setUser(response)}
            })
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
                <button type="submit" value="Submit"> Log in </button>
            </form>
        )
    }
}

export default Login;