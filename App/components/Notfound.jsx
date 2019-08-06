import React , { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component{
    render(){
        return(
            <div className="notFoundComp">
                <div className="container">
                    <Link to='/'>
                        <button className="notFoundForward">Go back home</button>
                    </Link>
                    <p className="notFoundText">
                        We are sorry, but the page you requested was not found
                    </p>
                </div>
            </div>
        )
    }
}

export default NotFound