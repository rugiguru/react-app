import React, { Component } from "react";
import { css } from '@emotion/core';
import { RotateLoader } from 'react-spinners';
import "../assets/css/Login.css";
import axios from 'axios';
const override = css`
    margin : 5px;
    margin-top : 50px;

`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.state = { flashbox: false, name:'', emailError : false, passwordError : false, showloader: false }
  }

  

  componentDidMount(){
    const key = localStorage.getItem("authKey");
    if(key){
      this.props.history.push('./topics')
    }
  }

  handleChange(event) {
    const inputKey = event.target.name;
    this.setState({[inputKey]: event.target.value});
    
  }

  register(){
    this.props.history.push('./register')
}

  handleSubmit = event => {
    
    event.preventDefault();
    if(!this.state.email){
      this.setState({emailError: true});
      return false;
    }

    if(!this.state.password){
      this.setState({emailError: false, passwordError : true});
      return false;
    }

    if( this.state.email && this.state.password ) {
      this.setState({emailError: false, passwordError : false});
    }
    this.setState({showloader: true})
    axios.post(`http://localhost:8000/api/login`,
    {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      if(res.data.status === 1){
        localStorage.setItem("authKey", res.data.token);
        localStorage.setItem("user_name", res.data.user);
        this.setState({"authKey":res.data.token});
        this.setState({"error":0,"message":""});
        window.location.reload();
        this.props.history.push("/topics");
      } else {
        this.setState({"error":1,"message":res.data.message, showloader: false});
      }
    }).catch((error) => {
      this.setState({"error":1,"message":"Unable to Authenticate"});
    });
  
  }

  render() {
    return (
     
       

          <div className="container">

      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading text-center">Login</h2>
        <label className="sr-only">Email address</label>
        <input type="email" name='email' id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleChange} />
        {this.state.emailError ? <small className='error-class'>Email is required</small> : ''} <br />
        <label  className="sr-only">Password</label>
        <input type="password" name='password' id="inputPassword" className="form-control" placeholder="Password" onChange={this.handleChange} />
        {this.state.passwordError ? <small className='error-class'>Password is required</small> : ''} <br />
        {this.state.error ? <small className='error-class'>{this.state.message}</small> : ''} <br />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-success btn-block" type="submit" >{ this.state.showloader ? 'Signing In' : 'Sign in'  }</button>
       <p style={{marginTop : '50px', marginLeft : '135px'}}><RotateLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#28a745'}
          loading={this.state.showloader}
        /></p> 
     

       <p>Not a member? Register <button className='btn-sm no-border' onClick={this.register}>here</button></p>
      </form>

    </div>
      
    );
}
}