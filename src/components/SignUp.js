import React from 'react';

class SignUp extends React.Component {
    state = {
        role: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => { 
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'},
                body: JSON.stringify({ 
                    username: this.state.username, 
                    password: this.state.password,
                    role: this.state.role
                     })
            })
            .then(response => response.json())
            .then(user => {
                if(user.errors){
                    alert(user.errors)
                } else {this.props.setUser(user)}
            })
        } else {
            alert('Passwords must match.')
        }
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
                <label>Password Confirmation:
                <input type='text' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                </label>
                <label>Are you signing up as a shopper or owner? 
                    <select name='role' value={this.state.role} onChange={this.handleChange}>
                        <option value=''>Select role</option>
                        <option value='owner'>Owner</option>
                        <option value='shopper'>Shopper</option>
                    </select>
                </label>
                <button type="submit" value="Submit" > Sign up </button>    
            </form>
        )
    }
}

export default SignUp;