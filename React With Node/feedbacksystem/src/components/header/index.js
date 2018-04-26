import React, { Component } from 'react';
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        var links = JSON.parse(sessionStorage.getItem('menu'));
        this.state = {
            links: links
        }
    }
    render(){
        return (
            <div>
            <div class="title">
                <img src={logo} />
                <h1>{this.props.title}</h1>
            </div>
            <div class="header">
                <ul>
                    {this.state.links.map(link => {
                        return <li><Link to={link.Path} activeStyle={{color:"red"}}>{link.Label}</Link></li>
                    })}
                </ul>
            </div>
        </div>
        );
    }
}