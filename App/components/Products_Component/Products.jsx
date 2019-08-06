import React, { Component } from 'react'
import { animationForNav, goToUp } from '../Home_Component/Home.jsx'
import ForwardInfo from '../ForwardInfo.jsx'
import HeaderCompImg from '../HeaderCompImg.jsx'
import textInside from '../../data/information.json'
import NewsElementProducts from './NewsElementProducts.jsx'
import Signature from '../Signature_Component/Signature.jsx'
import SideMenu from '../Home_Component/SideMenu.jsx'
// import background from "../../image/o9.jpg"
import backgroundSmall from "../../image/products_Small.jpg"
import backgroundBig from "../../image/products_Big.jpg"

import p1 from "../../image/products1.jpg"
import p2 from "../../image/products2.jpg"
import p3 from "../../image/products3.jpg"
import p4 from "../../image/products4.jpg"
import p5 from "../../image/products5.jpg"

class Products extends Component{
    constructor(){
        super();
        this.state = {
            titleComp: 'nasze realizacje',
            // imgForHeader: background,
            bigSize: false,
            //ONLY FOR GITHUBPAGES
            allTitle:[],
            allText: [],
            allUrl: [p1, p2, p3, p4, p5]
        }
    }
    componentDidMount = () => {
        animationForNav();
        goToUp();
        this.updateSize();
        window.addEventListener('resize', this.updateSize);

        //ONLY FOR GITHUBPAGES
        const allTitle = [];
        const allText = [];
        textInside.productsElement.map((el,i) => {
            allTitle.push(el.title);
            allText.push(el.text);
        });
        this.setState({
            allTitle: allTitle,
            allText: allText
        })
    }

      //event for change size window
      updateSize = () => {
        if(window.innerWidth > 1000 && this.state.bigSize == false){
            this.setState({
                bigSize: true
            })
        } else if(window.innerWidth < 1000 && this.state.bigSize == true) {
            this.setState({
                bigSize: false
            })
        }
    }
   
    render(){
        const { titleComp, bigSize, allTitle, allText, allUrl } = this.state
        return(
            <div className="productsComp">
                {
                    bigSize
                    ? <SideMenu />
                    : null
                }
                <HeaderCompImg title={titleComp} imgHeader={bigSize ? backgroundBig : backgroundSmall } />
                    <div className="container">
                        <ForwardInfo elText={titleComp} />
                        <div className="productsEl">
                            {
                                allTitle.map((el, i) => {
                                    return <NewsElementProducts key={i} title={allTitle[i]} img={allUrl[i]} text={allText[i]} />
                                })
                            }
                        </div>
                    </div>
                <Signature bigSize={bigSize} />
            </div>
        )
    }
}

export default Products