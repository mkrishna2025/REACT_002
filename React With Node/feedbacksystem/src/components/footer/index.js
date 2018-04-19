import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return (
            <div>
                Copyright @2008, {this.props.company}
            </div>
        );
    }
}