import React, { Component } from 'react';
import './style.css';
class index extends Component {
    state = {
        cart: []
    }
    onAdd = (x) => {
        let cart = [...this.state.cart]
        let currentCartItem = cart.find(cartItem => cartItem.id == x.sys.id)
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
        const newCart = items.
        map((cartItem) => {
            if(cartItem.id == item.id){
                if(cartItem.count > 1){
                    cartItem.count -= 1;
                    }
            }
            return cartItem
        })
        this.setState({
            cart: newCart
        })
        // let cart = [...this.state.cart];
        // cart.filter((cartItem) => cartItem.count === 0);
        // this.setState({ cart })
    }
    onDelete = (index) => {
        let sliced = [...this.state.cart]
        sliced.splice(index,1);
        this.setState({
            cart: sliced
        })
    }
    toggleCart = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        let returned = this.props.Data.map( (x) => {
            return (
                <li key={x.sys.id}>
                    <a href='/1'><img src={x.fields.image} /> </a>
                    <div id="txt">
                        <button onClick={() => this.onAdd(x)}>Add to cart !</button>
                        <h3>{x.fields.title}</h3>
                        <h4>${x.fields.price}</h4>
                    </div>
                </li>
            )
        })
        let total = this.state.cart.reduce((sum ,i) => (
            Math.floor(sum += i.price * i.count)
        ),0);
        let style = this.state.show ? 'cart' : 'hideCart';
        let style1 = this.state.show ? 'cartOn' : 'container';
        let style2 = this.state.show ? 'cartFix' : 'cartfloat';
        return (
            <div>
            <a id={style2} href='#' onClick={this.toggleCart}><i className="fa fa-cart-plus fa-2x"></i></a>
            <ul id={style1}>
            {returned}
                        <div id={style}>
                        <h1>Cart:</h1>
                        <h4>Total: {total}$</h4>
                            {
                                this.state.cart.map((x,index) => { return(
                                    <div id='cart-item' key={x.id}>
                                    <span onClick={() => this.onDelete(index)}><a href='#'><i className="fa fa-window-close fa-2x"></i></a> </span>
                                        <ul id='counter'>
                                            <li>                                    
                                            <button onClick={() => this.increaser(x)}><i class="fa fa-sort-up fa-2x"></i></button>
                                            </li>
                                            <li>                                    
                                                <strong>count: {x.count}</strong>
                                            </li>
                                            <li>                                    
                                            <button onClick={() => this.decreaser(x)}><i class="fa fa-sort-down fa-2x"></i></button>
                                            </li>
                                        </ul>
                                        <div id='inner'>
                                            <a href='/1'><img src={x.img} /></a>
                                            <div>
                                                <h4>{x.title}</h4>
                                                <h5>${x.price}</h5>
                                                
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                </ul>
             </div>
        );
    }
}

export default index;