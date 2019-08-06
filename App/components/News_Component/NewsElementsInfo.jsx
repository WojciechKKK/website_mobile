import React, { Component } from 'react'

class NewsElementsInfo extends Component{
    render(){
        const { title, text, img } = this.props;
        const finalTitle = title.split(' ');
        return(
            <div className="newsElement">
                <div className="newsImg" style={{backgroundImage: `url(${img})`}}></div>
                <div className="newsText">
                    <div className="newsTitle">{finalTitle[0]} 
                        <a className="newsBold">{finalTitle[1]}</a>
                        </div>
                    <div className="newsArticle">{text}</div>
                    <button className="newsButton">czytaj więcej 
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        )
    }
}
export default NewsElementsInfo