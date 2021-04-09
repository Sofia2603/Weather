import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent'

function App(props) {
    const subject="React";
    console.log(props);
    return ( <div className="App" >
        <header className="App-header">
        <Fcomponent /> 
        <img src={ logo }
        className="App-logo"
        alt="logo"/>
        <p> Hello, { subject }! </p>  
        <div > Hello!My name is Anastasia.This is my first application!!! </div>   
        <a className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React </a> </header> </div>
    );
}


export default App;