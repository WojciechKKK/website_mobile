import React, { Component } from 'react'


class Hamburger extends Component{
    handleClickShowHideMenu = () => {
        if(typeof this.props.fnC == 'function'){
            this.props.fnC();
        }
    }
    render(){
        const { showHamburger , showMenuFromHam } = this.props
        return(
            <div>
                {
                    showHamburger
                    ?  <div className="hamburger" onClick={this.handleClickShowHideMenu}>
                        <span className={showMenuFromHam ? "hideSpan" : "showSpan"}></span>
                        <span className="hamSpan"></span>
                        <span className={showMenuFromHam ? "hideSpan" : "showSpan"}></span>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Hamburger