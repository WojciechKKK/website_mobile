import React, { Component } from 'react'

class Title extends Component{
    render(){
        return(
            <div className="titleName">
                <h1 className="title">
                    {this.props.titleCompany}
                    <sup className="titleOrg">&reg;</sup>
                </h1>
                {/* <p className="afterTitle">Dodajemy blasku</p> */}
            </div>
        )
    }
}

export default Title