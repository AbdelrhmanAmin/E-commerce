import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <header>
                    <a href='/'><i className="fa fa-joomla fa-5x"></i></a>
                </header>
                <section id="slider">
                    <div id="innerTxt">
                        <h2>E-commerce</h2>
                        <h1>Bed Collection.</h1>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;