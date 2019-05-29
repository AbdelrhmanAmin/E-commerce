import React, { Component } from 'react';
import './style.css';
import Cart from './../Cart';
class index extends Component {
    state = {
        show: false,
        item: {
            img: this.props.Data[0].fields.image,
            title: this.props.Data[0].fields.title,
            price: this.props.Data[0].fields.price
        }
    }
    onAdd = (x) => {
        let obj = {
            img: x.fields.image,
            title: x.fields.title,
            price: x.fields.price
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
                                !this.state.show ? '' : <div id='cart-item'>
                                <img src={this.state.item.img} />
                                <div>
                                    <h4>{this.state.item.title}</h4>
                                    <h5>${this.state.item.price}</h5>
                                    <span onClick={this.onDelete}>Remove</span>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
             </ul>
        );
    }
}

export default index;