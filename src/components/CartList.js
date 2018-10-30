import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../actions/index';
import {Link} from "react-router-dom";



class CartList extends Component {
    render() {
        /**
         * this.props.cart is populated through the redux store and mapStateToProps
         * this.props.removeFromCart is added through mapDispatchToProps
         */
        const picUrl = "https://149.129.128.3:8443";
        const cartList = (
            <div className="container">
                <div className="row">
                    {this.props.cart.map(item => {
                        return (
                            <div key={item.uniqueID} className="col-md-2 cart-container">
                                <img src={picUrl + item.thumbnail}/>
                                <p>
                                    Price : {item.price[0].value}{" "}
                                    {item.price[0].currency}
                                </p>
                                <button onClick={() => this.props.removeFromCart(this.props.cart, item.uniqueID)}>Remove
                                </button>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
        return (
            this.props.cart.length > 0 ?
                (<div>
                <p>Items in the Cart</p>
                <div className="cart">
                    {
                        cartList
                    }
                </div>
            </div>) : (
                    <p>Your cart is empty</p>
                )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.fashion.cartDetail
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeFromCart: removeFromCart
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
