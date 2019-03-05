import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { flashbox: false, name:'' }
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

  render() {
    
    return (
        <div className="App">
            
          <div className={this.state.flashbox ?'fadeIn':'fadeOut'}>
            <p>Hi Welcome!  </p>
          </div>
            
            <p>Sign In</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" />
              <label>Password</label>
              <input type="text" id="password" name="password" placeholder="Your Password.." />
              { this.state.flashbox ? (<input type="submit" value="Log out" />) : <input type="submit" value="Log in" /> }
            </form>
          </div>
        </div>
    );
}
}