import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

export default class Master extends Component {
    render(){
        return (
            <div>
                <Header title="Feedback System"/>
                {this.props.children}
                <Footer company="FeedBack System" />
            </div>
        );
    }
}