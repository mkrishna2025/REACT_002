import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 

export default class Footer extends Component {
    logOut(){
        sessionStorage.clear();
        this.props.history.goBack();
    }
    render(){
        return (
            <div>
                Copyright @2008, {this.props.company}
                <input type='button' value="Logout" onClick={this.logOut.bind(this)}/>
            </div>
        );
    }
}