import './App.css';
import Homepage from './containers/homepage/Homepage'
import {Switch, Route } from 'react-router-dom'
import ShopPage from './containers/shop/Shop'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

    </div>
  ); 
}

export default App;
