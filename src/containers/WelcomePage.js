import React from 'react';
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {

    
    render() {
        return (
            <div className='welcome'>
                <div id = 'parallelogram' >
                    <h1> MALL MADNESS</h1>
                </div>
                <br />
                <div className='login'>
                    <button className='login-button'><Link to='/login' >LOGIN </Link></button>
                    <button className='login-button'><Link to='/signup' >SIGN UP</Link></button>
                </div>
            </div>
        )
    }
}

export default WelcomePage