import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../actions/index';

class Cart extends Component {
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
                            <div key={item.uniqueID} className="col-md-4">
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
                <h1>Items in the Cart</h1>
                <div className="cart">
                    {
                        cartList
                    }
                </div>
            </div>) : (
                    <h1>Your cart is empty</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
