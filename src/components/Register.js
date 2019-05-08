import React, { Component } from "react";
import "../assets/css/Login.css";
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signin = this.signin.bind(this);
    this.state = { flashbox: false, name:'' }
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

  handleSubmit = event => {
    event.preventDefault();
   
    if(!this.state.u_name){
      this.setState({userError: true});
      return false;
    }
   
    if(!this.state.email){
      this.setState({userError: false, emailError: true});
      return false;
    }

    if(!this.state.password){
      this.setState({userError: false,emailError: false, passwordError : true});
      return false;
    }

    if(!this.state.c_password){
      this.setState({passwordError : false, userError: false,emailError: false, c_passwordError : true});
      return false;
    }

    if( this.state.email && this.state.password ) {
      this.setState({emailError: false, passwordError : false});
    }

  }

  signin(){
      this.props.history.push('./login')
  }

  render() {
    
    return (
        
      <div className="container">

      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading text-center">Register</h2>
        <label  className="sr-only">User Name</label>
        <input type="text" name='u_name' className="form-control" placeholder="User name"   onChange={this.handleChange}/>
        {this.state.userError ? <small className='error-class'>Username is required</small> : ''} <br />

        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" name='email'  className="form-control" placeholder="Email address"   onChange={this.handleChange}/>
        {this.state.emailError ? <small className='error-class'>Email is required</small> : ''} <br />

        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" name='password'  className="form-control" placeholder="Password"  onChange={this.handleChange}/>
        {this.state.passwordError ? <small className='error-class'>Password is required</small> : ''} <br />

        <label  className="sr-only">Confirm Password</label>
        <input type="password" name='c_passowrdname'  className="form-control" placeholder="Confirm Password"  onChange={this.handleChange}/>
        {this.state.c_passwordError ? <small className='error-class'>Confirm Password is required</small> : ''} <br />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
       
        <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
        <br />
        <p>Alraedy registered? Sign in <button className='btn-sm no-border' onClick={this.signin}>here</button></p>
      </form>
    </div>
        
    );
}
}