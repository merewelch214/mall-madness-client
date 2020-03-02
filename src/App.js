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

  componentDidMount() {
    const user_id = localStorage.user_id
    if (user_id) {
      fetch('http://localhost:3000/auto_login', {
        headers: {'Authorization': user_id}
        })
        .then(resp => resp.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
      }
    }
  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      if (this.state.currentUser.role === 'shopper') {
        localStorage.user_id = user.id
        localStorage.role = user.role
        this.props.history.push('/mall')
      } else if (this.state.currentUser.role === 'owner') {
        localStorage.user_id = user.id
        localStorage.role = user.role
        this.props.history.push('/store') // need to redirect to the particular owners store
      } 
    })
  } 

  // TO DO: add log out button
  // logOut = () => {
  //   this.setState({
  //     currentUser: null
  //   }, () => {this.props.history.push('/login')}
  //   )
  // }
  
  render() {  
    // console.log(this.state.currentUser)
    return (
      <Router> 
        <Route exact path='/signup' render={() => <SignUp setUser={this.setUser}/> } />
        <Route exact path='/login' render={() => <Login setUser={this.setUser}/> } />
        <Route path='/store' component={() => <Store currentUser={this.state.currentUser} /> }/>
        <Route path='/mall' component={() => <MallContainer currentUser={this.state.currentUser} /> }/>
      </Router> 
    )
  }
}

export default App;
