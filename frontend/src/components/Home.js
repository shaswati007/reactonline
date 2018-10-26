import React, { Component } from 'react';
import Footer from "./Footer";
import Banner from "./Banner";
import PLPMenu from "./PLPMenu";



class Home extends Component {

   

    render() {
       
        return(
            <div>
                <Banner />
                <Footer/>
            </div>
        )

    }

}

export default Home;