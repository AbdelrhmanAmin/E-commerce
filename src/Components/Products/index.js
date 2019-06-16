import React, { Component } from 'react';
import './style.css';
class index extends Component {
    state = {
        cart: []
    }
    onAdd = (x) => {
        let cart = [...this.state.cart]
        let currentCartItem = cart.find(cartItem => cartItem.id == x.sys.id)
        console.log(cart, x)
        if(currentCartItem){
          currentCartItem.count += 1

          this.setState({ cart })

          return
        }
        let obj = {
            img: x.fields.image,
            title: x.fields.title,
            price: x.fields.price,
            id: x.sys.id,
            count: 1,
        }
        this.setState({
            show: true,
            cart: [...this.state.cart,obj]
        })
    }
    increaser = (item) => {
        let items = [...this.state.cart];
        const newCart = items.map((cartItem) => {
            if(cartItem.id == item.id){
                cartItem.count += 1
            }
            return cartItem
        })
        this.setState({
            cart: newCart
        })
    }
    decreaser = (item) => {
        let items = [...this.state.cart];
        const newCart = items.map((cartItem) => {
            if(cartItem.id == item.id){
                cartItem.count -= 1
            }
            return cartItem
        })
        this.setState({
            cart: newCart
        })
    }
    onDelete = (index) => {
        let sliced = [...this.state.cart]
        sliced.splice(index,1);
        this.setState({
            cart: sliced
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
        let total = this.state.cart.reduce((sum ,i) => (
            Math.floor(sum += i.price * i.count)
        ),0)
        return (
            <ul  id='container'>
            {returned}
                    <div>
                        <div id="cart">
                        <h1>Cart:</h1>
                        <h4>Total: {total}$</h4>
                            {
                                this.state.cart.map((x) => { return(
                                    <div id='cart-item' key={x.id}>
                                    <button onClick={() => this.increaser(x)}>+</button>
                                    <span>{x.count}</span>
                                    <button onClick={() => this.decreaser(x)}>-</button>
                                        <div>
                                            <img src={x.img} />
                                            <div>
                                                <h4>{x.title}</h4>
                                                <h5>${x.price}</h5>
                                                <span onClick={() => this.onDelete(index)}>Remove</span>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
             </ul>
        );
    }
}

export default index;