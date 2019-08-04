import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Tab, Tabs, Form, ButtonToolbar,Button, ListGroup, Accordion,Card} from "react-bootstrap";
var {API_URL} = require("../assets/config");

export default class ProfileTabs extends Component {
    constructor(){
        super();
        this.state ={about: '', sharedIdeas : [], followedIdeas : []}
        this.handleAbout  = this.handleAbout.bind(this);
        this.handleChange  =this.handleChange.bind(this);
        this.getMySharedIdeas = this.getMySharedIdeas.bind(this);
        this.getMyFollowedIdeas = this.getMyFollowedIdeas.bind(this);
    }

    componentDidMount() {
        this.getMySharedIdeas();
        this.getMyFollowedIdeas();
    }
    
    async getMySharedIdeas(){
        let token = localStorage.getItem('authKey');
        var config = {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json',
        }
        const res = await axios.get(API_URL + `api/shared-ideas`, {headers:config});
        const {data} = await res;
        if(data.status == 1 ){
            this.setState({sharedIdeas: data.data});
        }
      }
    
    async getMyFollowedIdeas(){
        let token = localStorage.getItem('authKey');
        var config = {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json',
        }
        const res = await axios.get(API_URL + `api/followed-ideas`, {headers:config});
        const {data} = await res;
        if(data.status == 1 ){
            this.setState({followedIdeas: data.data});
        }
    }

    handleChange(event) {
        this.setState({about: event.target.value});
      }
    
    handleAbout(event){
      event.preventDefault();
      let token = localStorage.getItem('authKey');
      var config = {
          'Authorization' : 'Bearer ' + token,
          'Accept' : 'application/json',
      }
     
       axios.post(API_URL + `api/update-about-user`,{about: this.state.about}, {headers: config})
       .then(res => {
          if(res.data.status === 1){
            this.setState({message:res.data.data});
          } 
        }).catch((error) => {
          this.setState({"error":1,"message":"Unable to Authenticate"});
        });

    }

    render() {
        var sharedIdeasCount =this.state.sharedIdeas.length;
        var followedIdeasCount = this.state.followedIdeas.length;
        return (
            <div>
                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                    <Tab eventKey="about" title="About">
                        <br/>
                        <Form.Label>Tell us about your self, like profession, and link to your projects if any</Form.Label>
                        <Form.Control as="textarea" value={this.state.about} onChange={this.handleChange} rows="3" />   
                        <ButtonToolbar>
                            <Button variant="success" onClick={this.handleAbout}>Update</Button>
                        </ButtonToolbar>  
                    </Tab>

                    <Tab eventKey="stats" title="My Stats">
                        <div className='profile-my-stats-header'>
                            <h4>Add your social accounts</h4>
                            <p>Connecting your social account will significantly increase your chances to be contacted by other enrepreneurs and developers.</p>
                        </div>
                        <div className='profile-my-status-my-shared-ideas'>
                            <h4>My shared ideas {'(' + sharedIdeasCount + ')'}</h4>
                            <Accordion defaultActiveKey="0">
                                {
                                this.state.sharedIdeas.map(idea => {
                                    return(
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={idea.id}>
                                                {idea.title}
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={idea.id}>
                                            <Card.Body>
                                                {idea.description}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    )

                                })
                                }  
                            </Accordion>
                        </div>

                        <div className='profile-my-status-my-followed-ideas'>
                            <h4>My followed ideas {'(' + followedIdeasCount +')'}</h4>
                            <Accordion defaultActiveKey="0">
                                {
                                this.state.followedIdeas.map(idea => {
                                    return(
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={idea.id}>
                                                {idea.title}
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={idea.id}>
                                            <Card.Body>
                                                {idea.description}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    )

                                })
                                }  
                            </Accordion>
                        </div>   
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
