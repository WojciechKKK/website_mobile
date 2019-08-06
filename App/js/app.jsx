import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/style.css'
import Website from '../components/Website.jsx'

const App = () => <Website />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
