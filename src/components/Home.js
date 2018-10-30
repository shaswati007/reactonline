import React, {Component} from 'react';
import Footer from "./Footer";
import Banner from "./Banner";
import PLPMenu from "./PLPMenu";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions';


class Home extends Component {


    render() {

        return (
            <div>
                <button style={{backgroundColor: 'blue'}} onClick={(e) => this.props.login()}>Login</button>
                <Banner/>
                
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);