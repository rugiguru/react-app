import React, { Component } from "react";
import axios from 'axios';
import {Form} from "react-bootstrap";

class CreateFeed extends Component {
    render(){
        return(
            <div className='module-createFeed'>
            <h4 className='text-center'>Create Feed</h4>
            <div className='container '>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
               
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Details</Form.Label>
                    <Form.Control as="textarea" rows="10" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>options for voting</Form.Label>
                    <Form.Control type="text" placeholder="Options for polling Ex :- Reebok, Nike, Puma (Values must be Comma separated as shown)" />
                </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}

export default CreateFeed;