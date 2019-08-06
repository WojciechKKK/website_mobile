import React, { Component } from 'react'
import styled from 'styled-components'

class NewsElementProducts extends Component{
    constructor(){
        super();
        this.state = { 
            show: false
        }
    }
  
    render(){
        const { title, img, text } = this.props;
        const ProductElement = styled.div`
        height: 40vh;
        width: 100%;
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 5vh;
        position: relative;
        cursor: pointer;
        display: flex;
        `
        return(
            <ProductElement className="productElement">
                <div className="newsProductText">
                    {title}
                </div>
                <div className="productsInfo">
                   {text}
                   <br /><a href="#">Przejdź</a>
                </div>
            </ProductElement>

        )
    }
}

export default NewsElementProducts