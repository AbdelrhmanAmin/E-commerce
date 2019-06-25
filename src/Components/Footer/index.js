import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <ul id='foot'>
                    <li><a target="_blank" href='https://www.github.com/AbdelrhmanAmin'><i className="fa fa-github fa-3x"></i></a></li>
                    <li><a target="_blank" href='https://www.facebook.com/AliZien1999'><i className="fa fa-facebook-square fa-3x"></i></a></li>
                </ul>
            </div>
        )
    }
}
export default Footer;