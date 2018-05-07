import React from 'react';
import './login.css';
//import { isNullOrEmpty } from '../util/index.js';
import { isNullOrEmpty } from '../util';

import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement('#root');
class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            errorUserName: '',
            errorPassword: '',
            errorMessages: [ ],
            modalIsOpen: false,
            reg_email: '',
            reg_password: ''
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    
    loginClick(){
        var isValid = true;
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
            
            var data = new FormData();
            data.append('username', this.state.userName);
            data.append('password', this.state.password);

            /*fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists', {
                method: 'POST',
                body: data
            })
            .then(response => {
                if(response.status == 200){
                    return response.json();
                }
            })
            .then(responseJson => {
                if(responseJson.success && responseJson.data){
                    if(this.state.userName == 'admin'){
                        this.props.history.push('admin');
                    } else {
                        this.props.history.push('students');
                    }
                } else {
                    alert('Please check Credentials');
                }
            })
            .catch(exception =>{
                debugger;
            });*/

            fetch('http://trainingkit.azurewebsites.net/api/Users/Login', {
                method: 'POST',
                body: data
            })
            .then(response => {
                if(response.status == 200){
                    return response.json();
                }
            })
            .then(responseJson => {
                if(responseJson.success && responseJson.data.IsValid){
                    var data = responseJson.data;
                    var name = data.UserName;
                    var role = data.Role;
                    sessionStorage.setItem('menu', JSON.stringify(data.Menu));
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('role', role);
                    sessionStorage.setItem('userName', name);
                    if(role == 'Admin') {
                        this.props.history.push('admin');
                    } else {
                        this.props.history.push('home');
                    }
                } else {
                    alert('Please check Credentials');
                }
            })
            .catch(exception =>{
                debugger;
            });

        } else {
            this.setState( { errorUserName : errorMessageForUserName, errorPassword: errorMessageForPassword, errorMessages: messages });
        }
    }
    register(){
        var data = new FormData();
        data.append('username', this.state.reg_email);
        data.append('password', this.state.reg_password);
        
        fetch('http://trainingkit.azurewebsites.net/api/Users/CreateUser', {
            method: 'POST',
            body: data
        })
        .then(response => {
            if(response.status == 200){
                return response.json();
            } else {
                alert('User Creation Failed');
            }
        })
        .then(responseJson => {
            if(responseJson.success && responseJson.data){
                alert('User Created Successfully');
            } else {
                alert('User Creation Failed');
            }
        })
        .catch(exception =>{
            debugger;
        });
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
                <div>
                    <button onClick={this.openModal}>Sign Up</button>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                        <h2 ref={subtitle => this.subtitle = subtitle}>Please Enter Details</h2>
                        <div>
                            email <input onChange={event => this.state.reg_email = event.target.value}/>
                            <br/>
                            password <input onChange={event => this.state.reg_password = event.target.value}/>
                            <br/>
                            <input type="button" value="Register" onClick={this.register.bind(this)}/>
                        </div>
                        <button onClick={this.closeModal}>close</button>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default LoginScreen;