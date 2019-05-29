import React from 'react';
import Products from './Components/Products';
import Data from './Data/products.json';
import './App.css';
function App() {
  return (
    <div className="App">
      <Products Data={Data.items}/>
    </div>
  );
}

export default App;
