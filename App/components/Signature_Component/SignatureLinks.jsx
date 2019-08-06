import React, { Component } from 'react'
import data from '../../data/information.json'

class SignatureLinks extends Component{
    render(){
        return(
            <div>
                {
                    data.signatureInfo.map((el,i) => {
                        return <div key={el.name} className={`signature${el.name}`}>
                                    <p>{el.title}</p>
                                    <ul>
                                        {el.info.map((elem,key) => <li key={key}>{elem}</li>)}
                                    </ul>
                                </div>
                    })
                }
                {/* <div className="singatureLinks">
                    <p>Informacje prawne</p>
                        <ul>
                            <li>Regulamin sklepu</li>
                            <li>Polityka prywatności</li>
                            <li>Materiały do pobrania</li>
                            <li>Koszty gospodarowania</li>
                            <li>Plan połączenia</li>
                        </ul>
                    </div>
                    <div className="singatureInformations">
                    <p>Pomocne linki</p>

                    <ul>
                            <li>Jak kupić na raty?</li>
                            <li>Numer konta bankowego</li>
                            <li>Częste pytania</li>
                            <li>Reklamacje, zwroty, serwis</li>
                            <li>Dodatkowe gwarancje</li>
                        </ul>
                    </div>
                    <div className="singatureInvestments">
                    <p>Dla inwestorów</p>

                    <ul>
                            <li>Władze spółki</li>
                            <li>Raporty i finanse</li>
                            <li>Fundusze UE</li>
                            <li style={{color: 'black'}}>.</li>
                            <li style={{color: 'black'}}>.</li>
                        </ul>
                    </div> */}
            </div>
        )
    }
}

export default SignatureLinks