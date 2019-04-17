import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
   
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
    axios.post(`http://localhost:8000/api/login`,
    {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {

      if(res.data.status == 1){
        localStorage.setItem("authKey", res.data.token);
        this.setState({"authKey":res.data.token});
        this.setState({"error":0,"message":""});
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
        <div className="App container" style={{width:'30%'}}>
            
          <div className={this.state.flashbox ?'fadeIn':'fadeOut'}>
            {this.state.flashbox ? <p>{this.state.message}</p> : ''} 
          </div>
            
            <p>Log In</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" onChange={this.handleChange} />
              <label>Password</label>
              <input type="text" id="password" name="password" placeholder="Your Password.." onChange={this.handleChange}/>
              { this.state.flashbox ? (<input type="submit" value="Log out" />) : <input type="submit" value="Log in" /> }
            </form>
          </div>
        </div>
    );
}
}