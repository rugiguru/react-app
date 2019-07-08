import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {Button, ButtonToolbar, OverlayTrigger, Tooltip} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import './css/HomeTopic.css'
var {API_URL} = require("../assets/config");

class HomeTopic extends Component {
    constructor(props){
        super(props);
       this.getUserData = this.getUserData.bind(this);
       this.followIdea = this.followIdea.bind(this);
        this.state = {
            following: 0
        }
    }

    componentDidMount(){
       this.getUserData();
      
    }

    getUserData(ideaid){
      const token = localStorage.getItem('authKey');
      let config = {
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + token
      }
      if(token)
      {
          axios.get(
              API_URL + "api/following-idea",
              {headers:config}
            )
              .then(res => {
                if (res.data && res.data.status === 1) {
                  const following = res.data.data;
                  
                  this.setState({ following: following });
                  
                } else {
                  this.props.history.push('/login')
                }
              })
              .catch(e => {});
      }
    }

    followIdea = param =>e => {
      const token = localStorage.getItem('authKey')
      let config = {
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + token
      }
      if(token)
      {
        axios.post(API_URL + "api/follow-idea",
              {idea_id : param }, {headers : config})
              .then(res => {
                if (res.data && res.data.status === 1) {
                  window.location.reload();
                  
                } else {
                  this.props.history.push('/register')
                }
              })
              .catch(e => {});
      } else {
        this.props.history.push('/register')
      }
      
    }

    postDetails = param => e => {
      this.props.history.push('/post-details/' + param);
    }
    


    render(){
    let authKey = localStorage.getItem('authKey');
   let placement = 'top';
      let follwingIds = this.state.following;
        return(
        <div className='col-md-3' style={{marginTop: '0px'}}>
            <div className="card">
                <div className="card-body" style={{minHeight: '150px'}}>
                  <p className="card-text">{this.props.title} </p>
                  <p>by <span style={{color:'#28a745'}}>{this.props.user}</span></p>
                </div>
            </div>
            <div style={{textAlign: 'center', paddingTop: '5px'}}>
            {authKey  ? 
                  <button className='btn btn-success'>following <FontAwesomeIcon icon={faSync} color='#28a745' />  <span className="label label-default">{this.props.votes}</span></button>
                    : 
                   ''
            }
             { /*<ButtonToolbar>
        {
          <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
          <Tooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
          </Tooltip>
          }
          >
          <Button variant="secondary" >View</Button>
          </OverlayTrigger>
        }
      </ButtonToolbar> */ }
            </div>
        </div>
        );
    }
}

export default withRouter(HomeTopic);
