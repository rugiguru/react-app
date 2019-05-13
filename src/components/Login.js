import React, { Component } from "react";
import "../assets/css/Login.css";
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
   
    this.state = { flashbox: false, name:'', emailError : false, passwordError : false }
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
        this.setState({"error":1,"message":res.data.message, flashbox:'true'});
      }
    }).catch((error) => {
      this.setState({"error":1,"message":"Unable to Authenticate"});
    });
  
  }

  render() {
    return (
     
       

          <div class="container">

      <form class="form-signin" onSubmit={this.handleSubmit}>
        <h2 class="form-signin-heading text-center">Login</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" name='email' id="inputEmail" class="form-control" placeholder="Email address" onChange={this.handleChange} />
        {this.state.emailError ? <small className='error-class'>Email is required</small> : ''} <br />
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name='password' id="inputPassword" class="form-control" placeholder="Password" onChange={this.handleChange} />
        {this.state.passwordError ? <small className='error-class'>Password is required</small> : ''} <br />
        {this.state.error ? <small className='error-class'>{this.state.message}</small> : ''} <br />
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
      </form>

    </div>
      
    );
}
}