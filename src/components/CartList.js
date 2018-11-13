import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../actions/index';
import {viewCart,preCheckout} from "../actions";

import {Link} from 'react-router-dom';


class CartList extends Component {

    componentDidMount() {
        this.props.viewCart();
    }

    performPreCheckout = (item) => {
        alert("Items preparing for checkout");
        this.props.precheckout(item);
        this.checkout();
        
    }


    render() {

        const picUrl = "https://149.129.128.3:8443";
        const cartList = (
            <div className="container">
                <div className="row">
                    {this.props.cart.map(item => {
                        return (
                            <div key={item.orderItemId} className="col-md-2 cart-container">
                                <img src={picUrl + item.thumbnail}/>
                                <p>
                                    Price : {item.unitPrice}{" "}
                                    {item.currency}
                                </p>
                                <p>{item.orderItemId}</p>
                                <button onClick={() => this.props.removeFromCart(this.props.cart, item.orderItemId)}>
                                    Remove
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
                    <button onClick={() => this.props.performPreCheckout()} className="my-4 mr-3 float-right btn btn-warning"><Link to={`/shippingBilling`}>Proceed To Checkout <i className="far fa-arrow-alt-circle-right"></i></Link></button>
                    </div>
                </div>) : (
                    <p>Your cart is empty</p>
                )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.fashion.viewCartDetail,
        preCheckoutDetail: state.fashion.precheckout
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeFromCart: removeFromCart,
        viewCart: viewCart,
        preCheckout:preCheckout
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
