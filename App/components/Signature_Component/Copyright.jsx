import React, { Component } from 'react'

class Copyright extends Component{
    render(){
        return(
            <div className="finish">Copyright © 2019 - All Rights Reserved<br/>
            Designed by
                <a href="mailto:wojte_kk@wp.pl" title="Send message">Wojciech K.</a>
                <a onClick={this.props.fnC}><i className="fas fa-angle-double-right top"></i></a>
            </div>
        )
    }
}

export default Copyright