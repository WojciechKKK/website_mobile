import React, { Component } from 'react'
import data from '../../data/information.json'

class ContactData extends Component{
    render(){
        return(
            <div className="contactInfo">
                <h4>{data.companyName}</h4>
                <ul>
                    <li>
                    {data.company[2].info[1]}<br />
                    {data.company[2].info[0]}<br/>
                    Polska</li>
                </ul>
                <ul>
                    { data.companyData.map((el,i) => <li key={i}>{el}</li>) }
                </ul>
                <ul>
                    {
                        data.companyMaps.map((el,i) => {
                            return <li key={i}>
                                        <i className={`fas ${el.imgClass} sizeForContact`}></i>
                                        {el.info}
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ContactData