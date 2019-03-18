import React, { Component } from 'react';
import axios from 'axios';
import "./myStyle.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'', password:'', comment:'', topic:'React', usernameError: false, commentError : false }
    }

    handleUserName = event => {
        this.setState({username : event.target.value})
    }

    handlePassword =  event => {
        this.setState({password: event.target.value})
    }

    handleComments = event => {
        this.setState({comment: event.target.value})
    }

    handleTopic = event => {
        this.setState({topic: event.target.value})
    }

    handleForm = event => {
        event.preventDefault();
        if (!this.state.username) {
            this.setState({ usernameError : true })
        }
        
        if (!this.state.comment) {
            this.setState({ commentError : true })
        }

        var headers = {
            'Accept': 'application/json'
        }
        axios.post('http://localhost:8000/api/login', {
            email: this.state.username,
            password: this.state.password
          }, {headers : headers})
          .then(response => response.data.status)
            .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
          });

    }
    render() { 
        return (
            <div className="container">
                <form onSubmit={this.handleForm}>
                    <div >
                        <label> User Name</label>
                        <input type="text" value={this.state.username} onChange={this.handleUserName}/>
                        {this.state.usernameError ? <small className="error">User Name is required</small>: ''} 
                    </div>

                    <div>
                        <label>Password </label>
                        <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                    </div>

                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                        {this.state.commentError ? <small className="error">Comments Cannot be empty</small>: ''} 
                    </div>

                    <div>
                        <label>Topic</label>
                        <select value={this.state.comment} onChange={this.handleTopic}>
                            <option value='React'>React</option>
                            <option value='Angular'>Angular</option>
                            <option value='Vue'>Vue</option>
                        </select>
                    </div>

                    <div>
                    <input type="submit"/>
                    </div>
                    
                </form>
            </div>
        );
    }
}
 
export default Form;