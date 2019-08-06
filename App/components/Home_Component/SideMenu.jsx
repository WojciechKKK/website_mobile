import React, { Component } from 'react'

import SocialMedia from './SocialMedia.jsx'

class SideMenu extends Component{
    render(){
        return(
            <div className="sideMenuComp">
                <div className="sideText">
                    {/* <p>Najlepsza firma</p> */}
                    <p className="afterTitle">
                        Najlepsza oferta
                    </p>
                </div>
                <div className="sideInfo">
                    <SocialMedia />
                </div>
            </div>
        )
    }
}

export default SideMenu