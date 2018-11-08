import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart, viewCart } from '../actions/index';
import { Link } from "react-router-dom";

class Cart extends Component {
    render() {
        /**
         * this.props.cart is populated through the redux store and mapStateToProps
         * this.props.removeFromCart is added through mapDispatchToProps
         */
        const cartList = (
            <div className="container">
                <div className="row">
                    {this.props.cart.map(item => {
                        return (
                           <p>Hello from Cart</p>
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
                        <button className="btn btn-primary float-right"><Link to={`/cart`}>View Cart</Link></button>
                    </div>
                </div>) : (
                    <p>Your cart is empty</p>
                )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.fashion.viewCartDetail
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeFromCart: removeFromCart,
        viewCart: viewCart
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);