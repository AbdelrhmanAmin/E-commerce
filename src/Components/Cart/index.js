import React, { Component } from 'react';
import './style.css';
class index extends Component {
    // state = {  }
    render() {
        let back = 
            Object.entries(this.props.items).map((x) => {
                return(
                    <div id='cart-item'>
                        <img src={x.img} />
                        <div>
                            <h4>{x.title}</h4>
                            <h5>${x.price}</h5>
                            <span>Remove</span>
                        </div>
                    </div>
                )
            })
        return (
            <div id='cart-overlay'>
                <div id="cart">
                    {back}
                </div>
            </div>
        );
    }
}

export default index;