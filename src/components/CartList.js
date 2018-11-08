import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../actions/index';
import {viewCart} from "../actions";


class CartList extends Component {

    componentDidMount() {
        this.props.viewCart();
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

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
