import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch, withRouter } from 'react-router-dom';
import Navigation from "./components/topNavigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PLPMenu from "./components/PLPMenu";
import PDP from "./components/PDP";
import Home from "./components/Home";
import CartList from "./components/CartList";
import ShippingBilling from "./components/shippingBilling";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from "./actions";


class Main extends Component {


    render() {


        return (
            <div>

                <button className="float-right" onClick={(e) => this.props.login()}>Login in as Guest</button>
                <Navigation/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Apparel/:category/:subCategory/:id" component={PLPMenu}/>
                    <Route path="/Apparel/:product/:id" component={PDP}/>
                    <Route path="/cart" component={CartList}/>
                    <Route path="/shippingBilling" component={ShippingBilling}/>
                    <Route path="/Banner" component={Banner}/>
                    <Route path="/Footer" component={Footer}/>
                </Switch>


            </div>

        )

    }


}

const mapStateToProps = (state) => {
    return {
        loginResponse: state.fashion.loginResponse
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login: login
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));