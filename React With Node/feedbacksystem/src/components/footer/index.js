import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 

import $ from 'jquery';

export default class Footer extends Component {
    logOut(){
        sessionStorage.clear();
        this.props.history.goBack();
    }
    componentDidMount(){
        var button = $('#logout')[0];
        if(button){
            button.style.background = 'blue';
        }
    }

    render(){
        return (
            <div>
                Copyright @2008, {this.props.company}
                <input type='button' id="logout" value="Logout" onClick={this.logOut.bind(this)}/>
            </div>
        );
    }
}