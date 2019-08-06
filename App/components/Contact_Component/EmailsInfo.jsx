import React, { Component } from 'react'
import data from '../../data/information.json'

class EmailsInfo extends Component{
    render(){
        return(
            <div className="emailsInfoComp">
                <div className="container">
                    <ul className="emailsList">
                        {
                            data.companyContact.map((el, i) => {
                                return(
                                    <li key={i}>
                                        <div className="emailsImg">
                                            <i className="far fa-envelope sizeForEmail"></i>
                                        </div>
                                        <div className="emailsInfo">
                                            {el.title}
                                            <a className="emailsInfoAddress" href={`mailto:${el.email}`}>
                                                {el.email}
                                            </a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default EmailsInfo