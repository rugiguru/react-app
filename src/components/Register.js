import React, { Component } from "react";
import "./../Login.css";
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signin = this.signin.bind(this);
    this.state = { flashbox: false, name:'' }
  }

  componentDidMount(){
    const key = localStorage.getItem("authKey");
    if(key){
      this.props.history.push('./topics')
    }
  }

  handleSubmit = event => {
    event.preventDefault();
   
    
    if(this.state.flashbox)
    {
      this.setState({flashbox: false});

    }else {
      this.setState({ flashbox: true });
    }
  }

  signin(){
      this.props.history.push('./login')
  }

  render() {
    
    return (
        
        <div className="App container poller module-register" >
            
          <div className={this.state.flashbox ?'fadeIn':'fadeOut'}>
            <p>Hi Welcome!  </p>
          </div>
            
            <h3 className='text-center'>Register</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
            <label>User Name</label>
              <input type="text" id="username" name="username" placeholder="User name" />
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" />
              <label>Password</label>
              <input type="text" id="password" name="password" placeholder="Your Password.." />
              { this.state.flashbox ? (<input type="submit" value="Log out" />) : <input type="submit" value="Register" /> }
            </form>

            <p>Already registered?  <input type="submit" value="Sign in" onClick={this.signin}/></p>
          
           
          </div>
        </div>
        
    );
}
}