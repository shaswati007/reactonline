import React, {Component} from 'react';
import Footer from "./Footer";
import Banner from "./Banner";
import PLPMenu from "./PLPMenu";


class Home extends Component {


    render() {

        return (
            <div>
<<<<<<< HEAD
                <button style={{backgroundColor: 'blue'}} onClick={(e) => this.props.login()}>Login</button>
                <Banner/>
                
=======
                <Banner/>
>>>>>>> 1c29b8cace9469271063cc49484385cc565fa643
                <Footer/>
            </div>
        )

    }

}

export default Home;