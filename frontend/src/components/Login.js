import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor() {
        super();
        this.props = {clicked: true}
    }

    // changeTitle = () => {
    //     this.setState({ title: "Logged" });
    // };

    render() {
        return(

        <div className="text-right">

        <p className="" onClick= {() => this.setState({clicked: !this.props.clicked})}>
        {
           this.props.clicked? 'Log in as Guest' : 'Logged'
        }
        
        </p> 
        
        </div>


        ); 
    }
}

export default Login;