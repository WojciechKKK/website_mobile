import React, { Component } from 'react'
import { animationForNav, goToUp } from '../Home_Component/Home.jsx'
import HeaderCompImg from '../HeaderCompImg.jsx'
import NewsElementsInfo from './NewsElementsInfo.jsx'
import ForwardInfo from '../../components/ForwardInfo.jsx'
import textInside from '../../data/information.json'
import Signature from '../Signature_Component/Signature.jsx'
import SideMenu from '../Home_Component/SideMenu.jsx'
import backgroundSmall from "../../image/news_Small.jpg"
import backgroundBig from "../../image/news_Big.jpg"
// import background from "../../image/t4.jpg"

import n1 from "../../image/news_konwencja.jpg"
import n2 from "../../image/news_kronaby.jpg"
import n3 from "../../image/news_mini.jpg"
import n4 from "../../image/new_gshock.jpg"
import n5 from "../../image/news_wygraj.jpg"

class News extends Component{
    constructor(){
        super();
        this.state = {
            titleComp: 'co nowego?',
            // imgForHeader: background,
            page: ['poprzednia', 2,3,4, 'następna'],
            bigSize: false,
            //only FOR GITHUBPAGES
            allTitle: [],
            allText: [],
            allUrl: [n1, n2, n3, n4, n5],
        }
    }
    componentDidMount = () => {
        animationForNav();
        goToUp();
        this.updateSize();
        window.addEventListener('resize', this.updateSize);

        //only FOR GITHUBPAGES
        const allTitle = [];
        const allText = [];
        const allUrl = []
        textInside.newsElement.map((el,i) => {
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
        if(window.innerWidth >= 1000 && !this.state.bigSize){
            this.setState({
                bigSize: true
            })
        } else if(window.innerWidth < 1000 && this.state.bigSize) {
            this.setState({
                bigSize: false
            })
        }
    }
    render(){
        const { titleComp, imgForHeader, page, bigSize, allTitle, allText, allUrl  } = this.state;
        console.log(allTitle.length)
        return(
            <div className="newsComp">
                {
                    bigSize
                    ? <SideMenu />
                    : null
                }
                <HeaderCompImg title={titleComp} imgHeader={bigSize ? backgroundBig : backgroundSmall} />
                <div className="container">
                   
                    <ForwardInfo elText={titleComp} />
                        {
                            allTitle.map((el,i) => {
                                return <NewsElementsInfo title={allTitle[i]} text={allText[i]} img={allUrl[i]} key={allTitle[i]}/>
                            })
                        }
                </div>
                <div className="newsPage">
                    <ul>
                     {
                         page.map(el => {
                             return <li key={el}>{el}</li>
                         })
                     }
                     </ul>
                </div>
                <Signature bigSize={bigSize}/>
            </div>
        )
    }
}

export default News