import React, { Component } from 'react'
import Copyright from './Copyright.jsx'
import SignatureLinks from './SignatureLinks.jsx'
import data from '../../data/information.json'
import SignatureContact from './SignatureContact.jsx';

const finalNameCompany = data.companyName.substring(0, data.companyName.indexOf(' '));

class Signature extends Component{
    constructor(){
        super();
        this.state = {
            listContact: data.company,
            titleCompany: finalNameCompany,
            textInfo: data.signatureElement
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.listenToScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    scrollTop = () => {
        // console.log(window.scrollY)
        let scrollStep = -window.scrollY / (1000 / 15),
        scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height
        const findTop = document.querySelector('.top');
        // if(scrolled > 0.44){
        // if(scrolled > 0.53){
        if(scrolled > 0.10){
            findTop.style.position = 'fixed'
        } else {
            findTop.style.position = 'absolute'
        }
      }
    render(){
        const { listContact, titleCompany, textInfo } = this.state
        return(
            <div className="signatureComp">
                <div className="signatureContainer">
                    <div className="signatureTitle">
                        <h1 className="title">
                            {titleCompany}
                        </h1>
                    </div>
                    <p className="signatureInfo">
                        {textInfo}
                    </p>
                </div>
                <SignatureContact listOfContact={listContact} /> 
                <SignatureLinks />
                <Copyright fnC={this.scrollTop}/>
            </div>
        )
    }
}
export default Signature