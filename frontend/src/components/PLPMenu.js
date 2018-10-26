import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import axios from "axios";

class PLPMenu extends Component {
  state = {
    shoeCategory: []
  };

  fetchData = id => {
    axios
      .get(`http://localhost:3030/category/` + id)
      .then(response => {
        console.log(response.data.express.catalogEntryView);
        this.setState({
          shoeCategory: response.data.express.catalogEntryView
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    this.fetchData(id);
  }

  componentDidUpdate(prevProps) {
    let currentId = this.props.match.params.id;
    let previousId = prevProps.match.params.id;
    if (currentId !== previousId) {
      this.fetchData(currentId);
    }
  }

 

  render() {
    const { shoeCategory } = this.props;

    const picUrl = "https://149.129.128.3:8443";

    return (
      <div>
        <div className="container">
          <div className="row">
            {shoeCategory &&
              shoeCategory.map(shoeList => {
                  return (
                  <div key={shoeList.uniqueID} className="col-md-4">
                    <h2 key={shoeList.uniqueID} />

                    <img className="plpImage" src={picUrl + shoeList.thumbnail} />
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
        <Footer/>
      </div>
    );
  }
}

export default PLPMenu;
