import React, { Component } from 'react';
import './style.css';
import Cart from './../Cart';
class index extends Component {
    state = {
        show: false,
        item: {
            img: '',
            title: '',
            price: ''
        }
    }
    onAdd = (x) => {
        let obj = {
            img: x.fields.image,
            title: x.fields.title,
            price: x.fields.price,
            id: x.sys.id
        }
        this.setState({
            show: true,
            item: obj
        })
    }
    onDelete = (index) => {
        this.setState({
            show: false
        })
    }
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
            <ul  id='container'>
                <Cart items={this.state.item} Data={this.props.Data.items}/>
                {returned}
                    <div id='cart-overlay'>
                        <div id="cart">
                            {
                                !this.state.show ? '' : 
                                    <ul id='cart-item'>
                                        <li key={this.state.item.id}>
                                            <img src={this.state.item.img} />
                                            <div>
                                                <h4>{this.state.item.title}</h4>
                                                <h5>${this.state.item.price}</h5>
                                                <span onClick={this.onDelete}>Remove</span>
                                            </div>
                                        </li>
                                    </ul>
                            }
                        </div>
                    </div>
             </ul>
        );
    }
}

export default index;