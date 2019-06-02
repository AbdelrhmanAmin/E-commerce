import React, { Component } from 'react';
import './style.css';
class index extends Component {
    state = {
        item: []
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
            item: [...this.state.item,obj]
        })
    }
    onDelete = (x, index) => {
        let sliced = [...this.state.item]
        sliced.splice(index,1);
        this.setState({
            item: sliced
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
            <span onClick={this.close}>+</span>
            {returned}
                    <div>
                        <div id="cart">
                            {
                                this.state.item.map((x, index) => { return(
                                    <ul id='cart-item'>
                                        <li key={x.id}>
                                            <img src={x.img} />
                                            <div>
                                                <h4>{x.title}</h4>
                                                <h5>${x.price}</h5>
                                                <span onClick={() => this.onDelete(index)}>Remove</span>
                                            </div>
                                        </li>
                                    </ul>)
                                })
                            }
                        </div>
                    </div>
             </ul>
        );
    }
}

export default index;