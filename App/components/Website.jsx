import React, { Component } from 'react'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'
import Navigation from './Navigation_Component/Navigation.jsx'
import  { Home, listMenu }  from './Home_Component/Home.jsx'
import News from './News_Component/News.jsx'
import Products from './Products_Component/Products.jsx'
import Offer from './Offer_Component/Offer.jsx'
import Contact from './Contact_Component/Contact.jsx'
import NotFound from './NotFound.jsx'


class Website extends Component{
    constructor(){
        super();
        this.state = {
            allEl: listMenu, // ['home', 'news', 'products', 'offer', 'contact']
            allElComponent: [Home, News, Products, Offer, Contact]   //must be the same as above - all route = components
        }
    }
    render(){
        return(
            <HashRouter>
                <div>
                    <Navigation />
                    <Switch>
                        {/* double - need to forwarding */}
                         <Route exact path='/' component={Home} /> 
                            {
                                this.state.allEl.map((el,key) =>  <Route path={`/${el}`} component={this.state.allElComponent[key]} key={key} />)
                            }
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Website

    //==
    // const final = [];
    // this.state.allEl.map((el,key) => final.push({path: `/${el}`, component: this.state.allElComp[key]}));
    // let test = final.map(({path, component}, key) => <Route path={path} component={component} key={key} />);
{/* <Route exact path='/' component={Home}/> 
                        <Route exact path='/home' component={Home} />
                        <Route path='/news'component={News} />
                        <Route path='/products'component={Products} />
                        <Route path='/offer'component={Offer} />
                        <Route path='/contact'component={Contact} /> */}