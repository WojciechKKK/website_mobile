
import React, { Component } from 'react'

// dla paska pokazującego akywne tło - w Home to nie działa
class ShowActiveImg extends Component{
    componentDidMount = () => {
        this.showActive();
    }
    //show actually white background element
   showActive = () => {
       const { count } = this.props
       let checkSpan = document.querySelectorAll('.arrowInfo span');
       checkSpan[count].classList.add('spanActive');
       // console.log(checkSpan)
   }
    render(){
        return null
    }
}
export default ShowActiveImg