import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ForwardNavigation extends Component{
    constructor(){
        super();
        this.state = {
            textInfo: 'Zobacz więcej...'
        }
    }
    render(){
        const { allElements } = this.props;
        const { textInfo } = this.state;
        return(
            <div className="aboutSee">
                <div className="aboutSeeHeader">{textInfo}</div>
                <ul>
                {
                    allElements.map(el => {
                        return(
                            <li key={el}>
                                <span></span>
                                <Link className="elAbout" 
                                    to={ el == 'co nowego w branży' ? '/nowości' : '' 
                                    || el == 'nasze realizacje' ? '/produkty': '' 
                                    || el == 'oferta' ? '/oferta' : '' 
                                    || el == 'kontakt' ? '/kontakt' : '' }>
                                    {el}
                                </Link>
                            </li>
                        )
                    })
                }
                
                </ul>
            </div>
        )
    }
}

export default ForwardNavigation