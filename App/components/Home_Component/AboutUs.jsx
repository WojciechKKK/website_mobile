import React, { Component } from 'react'
import Signature from '../Signature_Component/Signature.jsx'
import ForwardNavigation from './ForwardNavigation.jsx'
import data from '../../data/information.json'

class AboutUs extends Component{
    render(){
        const { itemSeeOthers } = this.props;
        const { bigSize } = this.props
        return(
            <div className="aboutComp">
                <div className="aboutCompContainer">
                    <div className="aboutImg"></div>
                    <div className="aboutUsInfo">
                        <h3>o <a className="aboutBold">nas</a> w kilku słowach</h3>
                        {
                            data.aboutUsElement.map((el,i) => {
                                return <p key={i}>{el.paragraph}</p>
                                })
                        }
                    </div>
                    <span className="aboutBorder"></span>
                    <ForwardNavigation allElements={itemSeeOthers} />
                </div>
                <Signature />
            </div>
        )
    }
}

export default AboutUs