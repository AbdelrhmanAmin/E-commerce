import React, { Component } from 'react';
import Products from '../../Components/Products';
import Header from '../../Components/Header';
import Data from '../../Data/products.json';
import Footer from '../../Components/Footer';

class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <Products Data={Data.items}/>
                <Footer />
            </div>
        )
    }
}
export default Home;