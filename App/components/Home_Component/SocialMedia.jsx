import React, { Component } from 'react'
// import data from '../../data/information.json'

class SocialMedia extends Component{
    constructor(){
        super();
        this.state = {
            // allElHref: [],
            // allElClass: [],
            socialMedia: ['youtube', 'instagram', 'linkedin', 'twitter', 'facebook'],
        }
    }
    // componentDidMount = () => {
    //     //need for add class from fontawensome
    //     const allHref = [];
    //     const allHClass = [];
    //     data.socialMedia.map(el => allHref.push(el.href))
    //     data.socialMedia.map(el => allHClass.push(el.class))
    //     this.setState({
    //         allElHref: allHref,
    //         allElClass: allHClass
    //     })
    // }
    render(){
        // const { allElHref, allElClass } = this.state
        const {  socialMedia } = this.state
        return(
            <div className="socialMedia">
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
                                    <div className={el}></div>
                                </a>
                    })
                }

            </div>
        )
    }
}

export default SocialMedia