import React, { Component } from 'react';
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
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
                <li><NavLink  to="home"  activeClassName="active"  activeStyle={{color:"red"}}>Home</NavLink ></li>
                <li><Link to="students" activeStyle={{color:"red"}}>Students</Link></li>
                <li><Link to="map" activeStyle={{color:"red"}}>Map</Link></li>
                <li><Link to="branches" activeStyle={{color:"red"}}>Branches</Link></li>
                <li><Link to="aboutus" activeStyle={{color:"red"}}>About Us</Link></li>
                </ul>
            </div>
        </div>
        );
    }
}