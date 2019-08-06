import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ForwardInfo extends Component{
    render(){
        const { elText } = this.props
        return(
            <div className="forwardInfo">
                <div className="textForward">
                    <div className="navForward">
                        <span className="spanForward"></span>
                        <Link to='/home' className="linkForward">
                            <span className="navForwardText">
                                home
                            </span>
                        </Link>
                   </div>
                    <div className="navForward">
                        <span className="spanForward"></span>
                        <a className="navForwardText active">
                            {elText}
                        </a>
                   </div>
                </div> 
            </div>
        )
    }
}

export default ForwardInfo