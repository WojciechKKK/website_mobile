import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import SocialMedia2 from '../Home_Component/SocialMedia2.jsx'

class ElementNavigation extends Component{
    closeSlideMenu = () => {
        if(typeof this.props.fnClick =='function'){
            this.props.fnClick();
        }
    }
    
    render(){
        const { listMenu } = this.props;
        return(
            <div className={this.props.show ? 'slideMenu' : 'showMenu'}>
               <ul>
                   {
                    listMenu.map(el => {
                        return ( 
                            <li key={el}>
                                <NavLink to={`/${el}`} onClick={this.closeSlideMenu} className="elMenu" activeClassName="elClickOn">
                                    {el}
                                </NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
                <SocialMedia2 />
            </div>
        )
    }
}

export default ElementNavigation