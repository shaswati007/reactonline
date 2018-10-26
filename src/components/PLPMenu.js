import React, {Component} from "react";
import {Link} from "react-router-dom";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from "../actions";

class PLPMenu extends Component {


    componentDidMount() {
        let {id} = this.props.match.params;
        this.props.getProducts(id);
    }

    componentDidUpdate(prevProps) {
        let currentId = this.props.match.params.id;
        let previousId = prevProps.match.params.id;
        if (currentId !== previousId) {
            this.props.getProducts(currentId);
        }
    }


    render() {
        const {products} = this.props;

        const picUrl = "https://149.129.128.3:8443";

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {products &&
                        products.map(shoeList => {
                            return (
                                <div key={shoeList.uniqueID} className="col-md-4">
                                    <h2 key={shoeList.uniqueID}/>

                                    <img height={300} width={100} src={picUrl + shoeList.thumbnail} alt=""/>
                                    <Link to={`/Apparel/${shoeList.name}/${shoeList.uniqueID}`}>
                                        <p className="pdp">{shoeList.name}</p>
                                    </Link>
                                    <p>
                                        Price : {shoeList.price[0].value}{" "}
                                        {shoeList.price[0].currency}
                                    </p>
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
        products: state.fashion.products,
    }
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getProducts: getProducts
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(PLPMenu);
