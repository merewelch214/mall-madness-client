import React from 'react';
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {

    
    render() {
        return (
            <div>
                <h1> Welcome to the mall! </h1>
                <Link to='/login' >Login</Link>
                <Link to='/signup' >SignUp</Link>
            </div>
        )
    }
}

export default WelcomePage