import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MallContainer from './containers/MallContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'

class App extends React.Component {
  state = {
    currentUser: null
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  } 
  
  render() {  
    console.log(this.state.currentUser)
    return (
      <Router> 
        <Route path='/signup' render={() => <SignUp setUser={this.setUser}/>} />
        <Route path='/mall' component={MallContainer}/>
        <Route exact path='/' component={Login}/>
      </Router> 
    )
  }
}

export default App;
