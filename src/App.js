import React from 'react';
import Products from './Components/Products';
import Header from './Components/Header';
import Info from './Components/Info';
import Data from './Data/products.json';
import Home from './Screens/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route path='/' exact component={ () => {
            return <Home />
          }} />
          <Route path='/1' exact component={() => 
            <Info Data={Data.items}/>} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
