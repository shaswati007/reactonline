import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import Navigation from "./components/topNavigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PLPMenu from "./components/PLPMenu";
import PDP from "./components/PDP";
import Home from "./components/Home";
import CartList from "./components/CartList";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from "./actions";


class Main extends Component {

<<<<<<< HEAD
    componentDidMount() {
        this.props.login;
        console.log(this.props)
    }
    


     login() {
        // for all items in state
        for (let WCToken in this.props.login()) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(WCToken)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(WCToken);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [WCToken]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [WCToken]: value });
            }
          }
        }
      }

=======
>>>>>>> 611412d982131b4484a2b82880fe00e2beea5004

    render() {


        return (
            <div>
<<<<<<< HEAD
                <button className=" float-right" onClick={(e) => this.props.login()}>Login in as Guest</button>

        <Navigation />
                
=======

                <button className="" onClick={(e) => this.props.login()}>Login in as Guest</button>
                <Navigation/>

>>>>>>> 611412d982131b4484a2b82880fe00e2beea5004
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Apparel/:category/:subCategory/:id" component={PLPMenu}/>
                    <Route path="/Apparel/:product/:id" component={PDP}/>
                    <Route path="/cart" component={CartList}/>
                    <Route path="/Banner" component={Banner}/>
                    <Route path="/Footer" component={Footer}/>
                </Switch>
<<<<<<< HEAD
=======

>>>>>>> 611412d982131b4484a2b82880fe00e2beea5004

            </div>

<<<<<<< HEAD
            </div>

        )

=======
        )

>>>>>>> 611412d982131b4484a2b82880fe00e2beea5004
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);