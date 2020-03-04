import React from 'react';
import { withRouter, Route, Switch } from 'react-router';
import MallContainer from './containers/MallContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Store from './containers/Store'
import WelcomePage from './containers/WelcomePage'
import Cart from './containers/Cart'

class App extends React.Component {
  state = {
    currentUser: null,
    stores: [], 
    cart: []
  } 

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
    fetch('http://localhost:3000/stores')
    .then(response => response.json())
    .then(stores => this.setState({ stores: stores }))
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

  fillCart = () => {
    fetch(`http://localhost:3000/carts${this.state.currentUser.cart.id}`)
    .then(response => response.json())
    .then(cart => this.setState({ cart: cart }))
  }


    logOut = () => {
        this.setState({
        currentUser: null
        }, () => {this.props.history.push('/login')}
        )
    }
  
  render() {  
    console.log(this.state)
    return (
      <Switch> 
        <Route path='/signup' render={() => <SignUp setUser={this.setUser}/> } />
        <Route path='/login' render={() => <Login setUser={this.setUser} userCart={this.fillCart}/> } />
        <Route path='/store/:storeName' render={(routerProps) => <Store currentUser={this.state.currentUser} {...routerProps} stores={this.state.stores}/> }/>
        <Route path='/store' render={() => <Store currentUser={this.state.currentUser}/> } />
        <Route path='/mall' render={(routerProps) => <MallContainer currentUser={this.state.currentUser} {...routerProps} stores={this.state.stores} /> } />
        <Route path='/cart' render={() => <Cart currentUser={this.state.currentUser} userCart={this.fillCart} /> } />
        <Route path='/' component={WelcomePage}  />
      </Switch> 
    )
  }
}

export default withRouter(App);
