import React, { Component } from 'react'
import styled from 'styled-components'

import AboutUs from './AboutUs.jsx'
import Title from './Title.jsx'
import ShowActiveImg from './ShowActiveImg.jsx'
import ArrowSlider from './ArrowSlider.jsx'
import SideMenu from './SideMenu.jsx'
import data from '../../data/information.json'
import background1 from "../../image/b1.jpg"
import background2 from "../../image/b2.jpg"
import background3 from "../../image/b3.jpg"
import background4 from "../../image/b4.jpg"
import background5 from "../../image/b5.jpg"


/********************************CONFIGURATION*****************************/

// start automatic change slider ?
const startAutoChangeSlider = true;
// time fo change background (IN SECONDS) and time for change animate
const timeBackground = 4;
// list of view background 
const listBackground = [background5, background4, background3, background1, background2];
//name of Company -> set in file data/information.json
const titleCompany = data.companyName.substring(0, data.companyName.indexOf(' '));
//list of menu hamburger  (if you add new el -> need add new comp and route)
const listMenu = ['home', 'nowości', 'produkty', 'oferta', 'kontakt'];
//add animation rotate for Nav letter
const animationForNav = function(){
    let allLetterNav = document.querySelectorAll('.navTitle span');
    allLetterNav.forEach(el => el.classList.remove('addTitleAnimation'));
    setTimeout(() => {
        allLetterNav.forEach(el => el.classList.add('addTitleAnimation'));
    },100)
}
// go to up page
const goToUp = function(){
     let scrollStep = -window.scrollY / (1000 / 15),
        scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
}

/***************************END CONFIGURATION*****************************/



class Home extends Component{
    constructor(){
        super();
        this.state = {
            backgroundList: listBackground,
            backgroundChangeTime: timeBackground,
            counter: 0,
            autoSlider: startAutoChangeSlider,
            seeOthersList: ['co nowego w branży', 'nasze realizacje', 'oferta', 'kontakt'],
            titleCompany: titleCompany,
            bigSize: false
        }
    }
    componentDidMount = () => {
        //start slider ?
        if(this.state.autoSlider){
            this.timer = setInterval(this.nextSlider , this.state.backgroundChangeTime*1000);
        };
        animationForNav();
        goToUp();
        this.updateSize();
        window.addEventListener('resize', this.updateSize)
    }
    componentWillUnmount = () => {
        clearInterval(this.timer)
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

    //change the next slider
    nextSlider = () => {
        const { counter, backgroundList } = this.state
        this.setState({
            counter: counter == backgroundList.length-1 ? 0 : counter+1
        });
    }
    //change the prev slider
    prevSlider = () => {
        const { counter, backgroundList } = this.state
        this.setState({
            counter: counter == 0 ? backgroundList.length-1 : counter-1
        })
    }
    
    render(){
        const { backgroundList, counter, seeOthersList, titleCompany, backgroundChangeTime, bigSize } = this.state;
        const  final = backgroundList[this.state.counter];
        const HomeContainer = styled.div`
            height: 100vh;
            width: 100%;
            background-image: url(${final});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 65% 80%;
            animation-name: showImg;
            animation-duration: ${backgroundChangeTime}s;
            animation-iteration-count: 1;
            animation-timing-function: linear;
        `
        return(
            <div className="allBody">
                {
                    bigSize
                    ? <SideMenu />
                    : null
                }
                <HomeContainer>
                    <div className="container">
                        <ArrowSlider fnCNext={this.nextSlider} fnCPrev={this.prevSlider} count={counter} itemsBackground={backgroundList.length} />
                        <ShowActiveImg count={counter} />
                        <Title titleCompany={titleCompany}/>
                    </div>
                </HomeContainer>
                <AboutUs itemSeeOthers={seeOthersList} titleCompany={titleCompany} bigSize={bigSize}/>
            </div>
        )
    }
}

export { Home, titleCompany, animationForNav, listMenu, goToUp }