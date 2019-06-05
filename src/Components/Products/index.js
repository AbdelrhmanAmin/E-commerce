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
            id: x.sys.id,
            count: 1,
        }
        this.setState({
            show: true,
            item: [...this.state.item,obj]
        })
    }
    increaser = () => {
        this.setState(prevState => ({
            item: prevState.item.map((x) => {
          return {
                ...x,
                count: x.count +1
              }
            })
          }))
    }
    decreaser = (index) => {
        this.setState(prevState => ({
            item: prevState.item.map((x) => {
          return {
                ...x,
                count: x[index].count - 1
              }
            })
          }))
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
        let total = this.state.item.reduce((sum ,i) => (
            Math.floor(sum += i.price * i.count)
        ),0)
        return (
            <ul  id='container'>
            <span onClick={this.close}>+</span>
            {returned}
                    <div>
                        <div id="cart">
                        <h1>Cart:</h1>
                        <h4>Total: {total}$</h4>
                            {
                                this.state.item.map((x, index) => { return(
                                    <div id='cart-item'>
                                    <button onClick={() => this.increaser(index)}>+</button>
                                    <span>{x.count}</span>
                                    <button onClick={this.decreaser}>-</button>
                                        <div key={x.id}>
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