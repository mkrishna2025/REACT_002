import React from 'react';
import './login.css';
//import { isNullOrEmpty } from '../util/index.js';
import { isNullOrEmpty } from '../util';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorUserName: '',
            errorPassword: '',
            errorMessages: [ ]
        }
    }
    
    loginClick(){
        var isValid = true;
        debugger;
        var messages = [];
        
        var errorMessageForUserName = '';
        var errorMessageForPassword = '';
        
        if(isNullOrEmpty(this.state.userName)) {
            errorMessageForUserName = 'Please Enter User Name';
            messages.push(errorMessageForUserName);
            isValid = false;
        }
        
        if(isNullOrEmpty(this.state.password)) {
            errorMessageForPassword = 'Please Enter Password';
            messages.push(errorMessageForPassword);
            isValid = false;
        }
        
        if(isValid) {
            var json = {
                userName: this.state.userName,
                password: this.state.password
            }
            alert(JSON.stringify(json));
            if(this.state.userName == 'admin'){
                this.props.history.push('admin');
            } else {
                this.props.history.push('students');
            }
            
        } else {
            this.setState( { errorUserName : errorMessageForUserName, errorPassword: errorMessageForPassword, errorMessages: messages });
        }
    }
    render(){
        var style = { color: "blue" };
        var redStyle =  { color: "red" };
        return (
            <div class="loginDiv">
                <h3>{this.props.welcomeText}</h3>
                <div>
                    <label>User Name</label>
                    <input type="text" id="userName" name="userName" placeholder="Your name.." onChange={ event => this.state.userName = event.target.value } />
                    <span class="test"> {this.state.errorUserName}</span>
                    <br/>
                    <label>Last Name</label>
                    <input type="text" id="password" name="password" placeholder="Your Password.." onChange={ event => this.state.password = event.target.value } />
                    <span class="test"> {this.state.errorPassword}</span>
                    <br/>
                    <ul>
                        {this.state.errorMessages.map(message => <li style={ redStyle }> {message} </li>)}
                    </ul>
                    <input type="button" value="Login" onClick={this.loginClick.bind(this)} />
                    
                </div>
            </div>
        );
    }
}

export default LoginScreen;