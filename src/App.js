import React from 'react';
import Products from './Components/Products';
import Header from './Components/Header';
import Data from './Data/products.json';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Products Data={Data.items}/>
    </div>
  );
}

export default App;
