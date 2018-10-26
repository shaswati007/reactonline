import React, { Component } from 'react';
import axios from 'axios';
import SubMenu from './subMenu';



class Navigation extends Component {

  state = {
    mainCategory: []
  }

  componentDidMount() {
    axios.get('http://localhost:3030/topCategory')
      .then(res => {
       // console.log(res.data.express);
        this.setState({
          mainCategory: res.data.express.catalogGroupView
        })
      })
  }



  render() {

    const { mainCategory } = this.state;

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mainmenu">
        <a className="navbar-brand" href="#">iFashion</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ml-auto">

            {
              mainCategory.map(navList => (
                <li className="nav-item dropdown" key={navList.uniqueID}>
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{navList.name} </a>
                  <ul className="dropdown-menu secondDropdown" aria-labelledby="navbarDropdown">
                    <SubMenu below={navList.catalogGroupView} />
                  </ul>
                </li>
              ))
             
            }
            
          </ul>
             
        </div>
      </nav>



    )

  }


}

export default Navigation;