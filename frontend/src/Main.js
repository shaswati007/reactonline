import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Switch, withRouter} from 'react-router-dom';
import Navigation from "./components/topNavigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PLPMenu from "./components/PLPMenu";
import PDP from "./components/PDP";
import Login from "./components/Login"
import Home from "./components/Home";


import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return {
    topnavigation: state.topnavigation,
    plpmenu: state.plpmenu,
    pdpmenu : state.pdpmenu
  }
}





class Main extends Component {



  render() {

    return (

    
        <div>

          <Login />
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Apparel/:category/:subCategory/:id" component={PLPMenu} />
            <Route path="/Apparel/:product/:id" component={PDP} />
            <Route path="/login" component={Login} />
            <Route path="/Banner" component={Banner} />
            <Route path="/Footer" component={Footer} />
          </Switch>


        </div>
  
    )

  }


}

export default withRouter(connect(mapStateToProps)(Main));
