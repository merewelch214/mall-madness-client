import React from 'react';
import { Link } from 'react-router-dom';

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
                    this.props.setUser(response)
                }
            })
        }
    
    render() {
        return (
            <div className='welcome'>
                <div id = 'parallelogram' >
                    <h1> MALL MADNESS</h1>
                </div>
                <div className="login-container">
                    <form onSubmit={this.handleSubmit}> 
                        <label>Username <br />
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> <br />
                        </label>
                        <label>Password <br />
                        <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/> <br /> 
                        </label>
                        <button type="submit" value="Submit"> Log in </button>
                    </form>
                    <p> Don't have an account yet? Sign up <Link to='/signup' >here</Link></p>
                </div>
            </div>
        )
    }
}

export default Login;