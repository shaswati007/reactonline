import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProductDetail, addToCart, viewCart} from "../actions";


class PDP extends Component {

    addItemToCart = (item) => {
        alert("Items are Added To Cart");
        this.props.addToCart(item);
        this.props.history.push('/cart');
        //this.viewItemInCart();
    };

    viewItemInCart = (item) =>{
       // this.props.viewCart(item);
       // this.props.history.push('/viewCart')
    }


    componentDidUpdate(prevProps) {
        let currentId = this.props.match.params.id;
        let previousId = prevProps.match.params.id;
        if (currentId !== previousId) {
            this.props.getDetails(currentId);
        }
    }

    componentDidMount() {
        let {id} = this.props.match.params;
        this.props.getDetails(id);
    }

    render() {
        const {productDetail} = this.props;

        const picUrl = "https://149.129.128.3:8443";
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {productDetail &&
                        productDetail.map(pdpList => {
                            return (
                                <div key={pdpList.uniqueID} className="col-md-4">
                                    <h2 key={pdpList.uniqueID}/>

                                    <img src={picUrl + pdpList.thumbnail}/>
                                    <p>
                                        Price : {pdpList.price[0].value}{" "}
                                        {pdpList.price[0].currency}
                                    </p>
                                    <button onClick={() => this.addItemToCart(pdpList)}>Add to Cart</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productDetail: state.fashion.productDetail,
        cartDetail: state.fashion.cartDetail,
        viewCartDetail: state.fashion.viewCartDetail
    }
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getDetails: getProductDetail,
        addToCart: addToCart,
        viewCart : viewCart
    }, dispatch)
};


export default connect(mapStateToProps, mapActionsToProps)(PDP);