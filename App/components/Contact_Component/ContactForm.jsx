import React, { Component } from 'react'

class ContactForm extends Component{
    constructor(){
        super();
        this.state = {
            inputName:'',
            inputEmail: '',
            textMessage: '',
            textButton: 'wyślij wiadomość'
        }
    }
    setName= (e) =>{
        this.setState({
            inputName: e.target.value
        })
    }
    setEmail = (e) => {
        this.setState({
            inputEmail: e.target.value
        })
    }
    setMessage = (e) => {
        this.setState({
            textMessage: e.target.value
        })
    }
    sendForm = () => {
        const { inputName, inputEmail, textMessage} = this.state;
        alert('Formularz wysłany')
    }
    render(){
        const { inputName, inputEmail, textMessage, textButton} = this.state
        return(
            <div className="contactForm">
                <form onSubmit={this.sendForm}>
                    <label htmlFor="name">NAME
                        <input id="name" type="text" maxLength={30} onChange={this.setName} value={inputName} ></input>
                    </label>
                    <label htmlFor="surname">E-MAIL
                        <input id="surname" type="email" maxLength={30} onChange={this.setEmail} value={inputEmail} ></input>
                    </label>
                    <label>MESSAGE
                        <textarea type="text" cols="40" rows="4" maxLength={100} onChange={this.setMessage} value={textMessage}></textarea>
                    </label>
                    <button type="submit" className="btnSendForm newsButton">{textButton}</button>
                </form>
            </div>
        )
    }
}

export default ContactForm