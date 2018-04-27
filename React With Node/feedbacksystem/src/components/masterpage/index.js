import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

export default class Master extends Component {
    render(){
        const {children: Children, ...rest } = this.props;
        return (
            <div>
                <Header title="Feedback System"/>
                {Children}
                <Footer company="FeedBack System" {...rest}/>
            </div>
        );
    }
}