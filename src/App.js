import './App.css';
import Homepage from './containers/homepage/Homepage'
import {Switch, Route } from 'react-router-dom'
import ShopPage from './containers/shop/Shop'
import Header from './components/header/Header'
import authPage from './containers/authPage/authPage'
import { auth } from './firebase/firebase.utils'
import React from 'react'




class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null



  componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {    
    return (
    <div className="App">
    <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={authPage} />
      </Switch>

    </div>
    )
   } 

}

export default App;
