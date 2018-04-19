import React, { Component } from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div>
            <div class="title">
                <img src={logo} />
                <h1>{this.props.title}</h1>
            </div>
            <div class="header">
                <ul>
                <li><Link to="home" activeStyle={{color:"blue"}}>Home</Link></li>
                <li><Link to="students" activeStyle={{color:"blue"}}>Students</Link></li>
                <li><Link to="aboutus" activeStyle={{color:"blue"}}>About Us</Link></li>
                </ul>
            </div>
        </div>
        );
    }
}