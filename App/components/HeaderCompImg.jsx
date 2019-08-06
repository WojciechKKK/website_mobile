import React, { Component } from 'react'

class HeaderCompImg extends Component{
    render(){
        const { title, imgHeader } = this.props
        const finalTitle = title.split(' ');
        return(
            <div className="newsContainerTitle">
                <img className="newsTitleImg" src={imgHeader}></img>
                <div className="newsTitleText">
                    <a className="titleSpan titleBorder shadow">{finalTitle[0]}</a> 
                    <br />
                    <a className="titleSpan titleWhite shadow ">{finalTitle[1]}</a>
                </div>
                
            </div>
        )
    }
}

export default HeaderCompImg