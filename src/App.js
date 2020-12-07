import './App.css';
import Homepage from './containers/homepage/Homepage'
import {Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>

    </div>
  ); 
}

export default App;
