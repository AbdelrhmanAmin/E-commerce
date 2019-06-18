import React, { Component } from 'react';
import Products from '../../Components/Products';
import Header from '../../Components/Header';
import Data from '../../Data/products.json';

class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <Products Data={Data.items}/>
            </div>
        )
    }
}
export default Home;