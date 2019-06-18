import React, { Component } from 'react';
import Header from '../Header';
class Info extends Component {
    // state = {  }
    render() {
        let returned = this.props.Data.map( (x) => {
            return (
                <li key={x.sys.id}>
                    <img src={x.fields.image} />
                    <button onClick={() => this.onAdd(x)}>Add to cart !</button>
                    <h3>{x.fields.title}</h3>
                    <h4>${x.fields.price}</h4>
                </li>
            )
        })
        return (
            <div>
                {returned}
            </div>
        );
    }
}

export default Info;