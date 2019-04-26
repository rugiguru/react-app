import React, { Component } from "react";
import axios from 'axios';
import {Form} from "react-bootstrap";

class CreateFeed extends Component {
    constructor(props){
        super(props);
        this.state = { validated: false };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
        
        axios.post(`http://localhost:8000/api/create-feed`,
        {
        title: this.state.title,
        details: this.state.details,
        tags: this.state.tags
        })
        .then(res => {
        if(res.data.status == 1){
        localStorage.setItem("authKey", res.data.token);
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
    
    render(){
        const { validated } = this.state;
        return(
            <div className='module-createFeed'>
            <h4 className='text-center'>Create Feed</h4>
            <div className='container '>
            <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)} >
                <Form.Group controlId="ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" placeholder="Title" name='title' onChange={this.handleChange}  />
                    <Form.Control.Feedback type="invalid">
                Please choose a Title.
              </Form.Control.Feedback>
                </Form.Group>
               
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Details</Form.Label>
                    <Form.Control required as="textarea" rows="10" name='details' onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">
                            Please Enter the details
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="ControlInput2">
                    <Form.Label>Options or Tags</Form.Label>
                    <Form.Control required type="text" name='options' placeholder="Options for polling Ex :- Reebok, Nike, Puma (Values must be Comma separated as shown)" onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">
                            Please Enter the Tags or Options for Voting
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="ControlInput3">
                    <Form.Control type="submit" value='Submit' size='10'/>
                </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}

export default CreateFeed;