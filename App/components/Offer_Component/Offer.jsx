import React, { Component } from 'react'
import { animationForNav, goToUp } from '../Home_Component/Home.jsx'
import HeaderCompImg from '../HeaderCompImg.jsx'
// import NewsElementsInfo from './NewsElementsInfo.jsx'
import ForwardInfo from '../../components/ForwardInfo.jsx'
import Signature from '../Signature_Component/Signature.jsx'
import OfferElements from './OfferElements.jsx'
import data from '../../data/information.json'
import SideMenu from '../Home_Component/SideMenu.jsx'
// import background from "../../image/o7.jpg"
import backgroundSmall from "../../image/offer_Small.jpg"
import backgroundBig from "../../image/offer_Big.jpg"

import o1 from '../../image/o1.jpg'
import o2 from '../../image/o2.jpg'
import o3 from '../../image/o3.jpg'
import o4 from '../../image/o4.jpg'
import o5 from '../../image/o5.jpg'
import o6 from '../../image/o6.jpg'
import o7 from '../../image/o7.jpg'
import o8 from '../../image/o8.jpg'
import o9 from '../../image/o9.jpg'
import o10 from '../../image/o10.jpg'
import o11 from '../../image/o11.jpg'
import o12 from '../../image/o12.jpg'
import o13 from '../../image/o13.jpg'
import o14 from '../../image/o14.jpg'
import o15 from '../../image/o15.jpg'
import o16 from '../../image/o16.jpg'
import o17 from '../../image/o17.jpg'
import o18 from '../../image/o18.jpg'
import o19 from '../../image/o19.jpg'
import o20 from '../../image/o20.jpg'
import o21 from '../../image/o21.jpg'
import o22 from '../../image/o22.jpg'
import o23 from '../../image/o23.jpg'
import o24 from '../../image/o24.jpg'
import o25 from '../../image/o25.jpg'

class Offer extends Component{
    constructor(){
        super();
        this.state = {
            titleComp: 'nasza oferta',
            // imgForHeader: background,
            items: [o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14,o15,o16,o17,o18,o19,o20,o21,o22,o23,o24,o25],
            title: ['certina', 'tissot','adriatica','swatch','aviator','casio','lorus','seiko','citizen','orient','g-shock','diesel','fossil','timex','ice-watch','michael kors','cluse','suunto','roamer','festina','doxa','buloca','vostok', 'certina','atlantic'],
            bigSize: false
        }
    }
    componentDidMount = () => {
        animationForNav();
        goToUp();
        this.updateSize();
        window.addEventListener('resize', this.updateSize)
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
        const { titleComp, imgForHeader, items, bigSize, title } = this.state;
        // console.log(items)
        // for GITHUB pages !!!!
        // let final= []
        // for(var i = 0 ; i < 25; i++){
        //     final.push({"title": i+1, "url": `../image/e${i+1}.jpg`});
        // }
        const allElements = []
        for(var i = 0; i < 25;i++){
            allElements.push(i)
        }
        return(
            <div className="offerComp">
                {
                    bigSize
                    ? <SideMenu />
                    : null
                }
                <HeaderCompImg title={titleComp} imgHeader={bigSize ? backgroundBig : backgroundSmall} />
                <div className="container">
                    <ForwardInfo elText={titleComp} />
                    <div className="offerEl">
                        {
                            // items.map(el => <div key={el}>{el}</div>)
                            allElements.map((el,key) => {
                                return <OfferElements elementImg={items[key]} infoImg={title[key]}key={key}/>
                            }) 
                        }
                    </div>
                </div>
                <Signature bigSize={bigSize} />
            </div>
        )
    }
}

export default Offer