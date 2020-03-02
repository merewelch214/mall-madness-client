import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MallContainer from './containers/MallContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Store from './containers/Store'

class App extends React.Component {
  state = {
    currentUser: null
  } // we can pass down the current user and show different views if props.currentUser.role === 'owner' or 'shopper'

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      if (this.state.currentUser.role === 'shopper') {
        this.props.history.push('/mall')
      } else if (this.state.currentUser.role === 'owner') {
        this.props.history.push('/store') // need to redirect to the particular owners store
      } 
    })
  } 
  
  render() {  
    return (
      <Router> 
        <Route exact path='/signup' render={() => <SignUp setUser={this.setUser}/> } />
        <Route exact path='/login' render={() => <Login setUser={this.setUser}/> } />
        <Route path='/store' component={Store}/>
        <Route path='/mall' component={MallContainer}/>

      </Router> 
    )
  }
}

export default App;
