import React, {Component} from 'react';
import SubMenu from './subMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getNavbar} from "../actions";
import Cart from "./Cart";

class Navigation extends Component {

    componentDidMount() {
        this.props.getNavData();
    }
    

    render() {

        const {mainCategory} = this.props;

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mainmenu">
                <a className="navbar-brand" href="/">iFashion</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">

                        {
                            mainCategory.map(navList => (
                                <li className="nav-item dropdown" key={navList.uniqueID}>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">{navList.name} </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <SubMenu below={navList.catalogGroupView}/>
                                    </ul>
                                </li>
                            ))

                        }

                    </ul>

                </div>
               <div className="dropdown-cart">
                <div className="shopping-cart dropbtn"><i className="fas fa-shopping-cart user-account-logo"></i>Cart</div>
                <div className="dropdown-content">
                   <Cart />
                </div>
                </div>
            </nav>

        )

    }


}

const mapStateToProps = state => {
    return {
        mainCategory: state.fashion.navbar,
    }
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getNavData: getNavbar
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Navigation);