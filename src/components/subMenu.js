import React, { Component } from 'react';
import SubListMenu from './subListMenu';


class SubMenu extends Component {
    render() {
        const { below } = this.props;
        //console.log(below)
        return below.map((sub, i) => {
            return (

                <React.Fragment key={i}>

                    <li key={sub.uniqueID} className="dropdown-item dropdown" >

                        <a className="dropdown-toggle"  id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{sub.name}</a>

                        {
                            <ul className="" aria-labelledby="navbarDropdown2">
                                {sub.catalogGroupView !== undefined && <SubListMenu category={sub.identifier} id={sub.uniqueID} subBelow={sub.catalogGroupView} />}
                            </ul>


                        }

                    </li>

                </React.Fragment>

            )
        })

    }

}

export default SubMenu;