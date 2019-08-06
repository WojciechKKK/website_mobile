import React, { Component } from 'react'
import { animationForNav, goToUp } from '../Home_Component/Home.jsx'
import HeaderCompImg from '../HeaderCompImg.jsx'
import ForwardInfo from '../../components/ForwardInfo.jsx'
import ContactForm from './ContactForm.jsx'
import EmailsInfo from './EmailsInfo.jsx'
import Signature from '../Signature_Component/Signature.jsx'
import ContactData from '../Contact_Component/ContactData.jsx'
import SideMenu from '../Home_Component/SideMenu.jsx'
import backgroundBig from "../../image/contact1.jpg"
import backgroundSmall from "../../image/contact2.jpg"


class Contact extends Component{
    constructor(){
        super();
        this.state = {
            titleComp: 'kontakt',
            // imgForHeader: background,
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
        const { titleComp, imgForHeader, bigSize } = this.state
        return(
            <div className="contactComp">
                {
                    bigSize
                    ? <SideMenu />
                    : null
                }
                <HeaderCompImg title={titleComp} imgHeader={bigSize ? backgroundBig : backgroundSmall} />
                <div className="container">
                    <ForwardInfo elText={titleComp} />
                </div>
                <div className="iframeData">
                    <iframe className="iframeMap" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Warsaw%2C%20Poland+(Tytu%C5%82)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <ContactData />
                </div>
                <EmailsInfo />
                <ContactForm />
                <Signature bigSize={bigSize}/>
            </div>
        )
    }
}

export default Contact