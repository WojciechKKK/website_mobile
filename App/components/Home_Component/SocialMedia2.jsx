import React, { Component } from 'react'
// import data from '../../data/information.json'

class SocialMedia2 extends Component{
    constructor(){
        super();
        this.state = {
            // allElHref: [],
            // allElClass: [],
            socialMedia: ['youtube', 'instagram', 'linkedin', 'twitter', 'facebook'],
        }
    }
   
    render(){
        // const { allElHref, allElClass } = this.state
        const {  socialMedia } = this.state
        return(
            <div className="socialMedia2">
                {/* {
                    allElHref.map((el,i) => {
                        return <a key={i} href={el} style={{color: 'white'}} target="_blank" title={el}>
                                    <i className={`${allElClass[i]} sizeForSocial`}></i>
                                </a>
                    })
                } */}
                {
                    socialMedia.map((el, key) => {
                        return <a href={`https://www.${el}.com/`} target="_blank" key={key} title={el}>
                                    <i className={el}></i>
                                </a>
                    })
                }

            </div>
        )
    }
}

export default SocialMedia2