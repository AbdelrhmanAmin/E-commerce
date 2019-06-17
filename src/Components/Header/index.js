import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <header>
                    <i className="fa fa-joomla fa-5x"></i>
                </header>
                <section id="slider">
                    <div id="innerTxt">
                        <h2>Ali Zien</h2>
                        <p>E-commerce project.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;