import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { flashbox: false }
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
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
      { this.state.flashbox ?
      (<div className="alert-success">
        <p>You are logged in</p>
        </div>
        )
      : ''}
      <p>Contact Me</p>
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />
        
      <label>Password</label>
      <input type="text" id="password" name="password" placeholder="Your Password.." />
      
  
      { this.state.flashbox ? (<input type="submit" value="Log out" />) : <input type="submit" value="Log in" /> 

      }
      
      </form>
      </div>
      </div>
    );
}
}