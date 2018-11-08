import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SubListMenu extends Component {
  render() {
    const { subBelow,category } = this.props;
  // console.log(subBelow)
    return(
       <React.Fragment>
           {subBelow && subBelow.map(subl => {
             return (
               
                <li className="dropdown-item" key={subl.uniqueID}><Link to = {`/Apparel/${category}/${subl.name}/${subl.uniqueID}`}>{subl.name}</Link></li>

             )
          })
        }
       </React.Fragment>
    )        
   } 
 }

export default SubListMenu;