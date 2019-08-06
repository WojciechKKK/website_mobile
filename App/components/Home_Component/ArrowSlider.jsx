import React, { Component } from 'react'

class ArrowSlider extends Component{
    constructor(){
        super();
    }
    
    nextImage = () => {
        const { fnCNext } = this.props
        if(typeof fnCNext == 'function'){
            fnCNext();
        } 
    }
    prevImage = () => {
        const { fnCPrev } = this.props;
        if(typeof fnCPrev == 'function'){
            fnCPrev();
        }
    }
    render(){
        const { itemsBackground } = this.props;
        const allArrowSpan = Array.from({length: itemsBackground}, (x,i) => <span key={i} className="arrowSpan"></span>);
        return(
            <div>
                <div className="arrowRight" onClick={this.nextImage}>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="arrowInfo">
                    {
                       allArrowSpan 
                    }
                </div>
                <div className="arrowLeft" onClick={this.prevImage}>
                    <i className="fas fa-chevron-left"></i>
                </div>
            </div>
        )
    }
}

export default ArrowSlider