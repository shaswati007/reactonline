import React, {Component} from "react";
import {Route, Link, BrowserRouter} from "react-router-dom";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProductDetail} from "../actions";


class PDP extends Component {

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
                                    <button>Add to Cart</button>
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
    }
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getDetails: getProductDetail
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(PDP);
