import './App.css';
import Homepage from './containers/homepage/Homepage'
import {Switch, Route } from 'react-router-dom'
import ShopPage from './containers/shop/Shop'
import Header from './components/header/Header'


function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

    </div>
  ); 
}

export default App;
