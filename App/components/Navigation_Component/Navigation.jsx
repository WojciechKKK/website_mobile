import React, { Component } from 'react'
import { animationForNav, titleCompany, listMenu } from '../Home_Component/Home.jsx'
import ElementNavigation from './ElementNavigation.jsx'
import Hamburger from './Hamburger.jsx'

// import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import {slideUp, slideDown} from 'es6-slide-up-down'

import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            showMenuFromHam: false,
            nameTitle: [],
            listMenu: listMenu,
            showHamburger: true
        }
    }

    componentDidMount = () => {
        //add animation rotate for Nav letter
        animationForNav()
        //set name of Company
        this.setNameCompany();
        this.updateSize();
        window.addEventListener('resize', this.updateSize)
    }
    

     //event for change size window
     updateSize = () => {
        if(window.innerWidth < 1000 && !this.state.showHamburger){
            this.setState({
                showHamburger: true
            });
            let menuHamburger = document.querySelector('.slideMenu');
            slideUp(menuHamburger);
        } else if (window.innerWidth > 1000 && this.state.showHamburger){
            this.setState({
                showHamburger: false,
                showMenuFromHam: false
            })
        }
    }

    //for small menu-hamburger
    showHideMenu = () => {
        this.setState({
            showMenuFromHam: !this.state.showMenuFromHam
        });

        let menuHamburger = document.querySelector('.slideMenu');
        this.state.showMenuFromHam ? slideUp(menuHamburger) : slideDown(menuHamburger)
    }
    
     //set name of Company
    setNameCompany = () => {
    const newTitleCompany = [];
    // const { nameOfCompany } = this.props;
    for(let i = 0 ; i < titleCompany.length; i++){
        newTitleCompany.push(titleCompany[i])
        };
        this.setState({
            nameTitle:  newTitleCompany
        })
    }
    render(){
        const { showMenuFromHam, nameTitle, listMenu, showHamburger } = this.state;
        return(
            <div className="navigation">
                <Link className="navTitle" id="top" to="/">
                    {
                        nameTitle.map((el,key) => <span key={key} className={`titleLetter${key}`}>{el}</span>)
                    }
                    <sup className="navOrg">&reg;</sup>
                </Link>
                <Hamburger fnC={this.showHideMenu} showHamburger={showHamburger} showMenuFromHam={showMenuFromHam} />
                <ElementNavigation show={showHamburger} elements={listMenu} fnClick={this.showHideMenu} listMenu={listMenu}/>
                {
                    showHamburger
                    ? null
                    : <ElementNavigation elements={listMenu} listMenu={listMenu} showHamburger={showHamburger} showMenuFromHam={showMenuFromHam} />
                }
          
            </div>
        )
    }
}

export default Navigation