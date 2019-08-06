import React, { Component } from 'react'

class SignatureContact extends Component{
    render(){
        return(
            <div className="singatureContact">
                    {
                        this.props.listOfContact.map(el => {
                            return(
                                <div key={el.type} className="signatureMedia">
                                    <span className="signatureSpan"></span>
                                    <p>{el.type}</p>
                                    <span className="signatureSpan"></span>
                                    <ul>
                                        {
                                            el.info.map(el1 => <li key={el1}>{el1}</li>)
                                        }
                                    </ul>
                                    <p className="signatureLogo">
                                        <i className={el.imgClass}></i>
                                    </p>
                                </div>
                            )
                        })
                    }
                    </div>
        )
    }
}

export default SignatureContact