import React, { Component } from 'react'
import styled from 'styled-components'

class OfferElements extends Component{
    constructor(){
        super();
        this.state = {
            img: ''
        }
    }
    componentDidMount = () => {
        const { infoImg } = this.props
        this.setState({
            img: this.props.elementImg,
            title: infoImg.slice(0,1).toUpperCase() + infoImg.slice(1, infoImg.length)
        })
    }
    render(){
        const { img, title } = this.state
        const ElementsContainer = styled.div`
            background: url(${img});
            background-size: contain;
            background-repeat: no-repeat;
            `
        return(
            <ElementsContainer className="elementsContainer">
                <p className="offerElementsTitle">{title}</p>
            </ElementsContainer>
        )
    }
}

export default OfferElements