import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import './css/HomeTopic.css'
var {API_URL} = require("../assets/config");

class HomeTopic extends Component {
    constructor(props){
        super(props);
       this.followIdea = this.followIdea.bind(this);
        this.state = {
            following: 0
        }
    }

    componentDidMount(){
    }

    componentWillReceiveProps(newProps) {
      if (this.state.name !== newProps.name) {
        this.setState({name: newProps.name});
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
  
        return(
        <div className='col-md-3' style={{marginTop: '0px'}}>
            <div className="card">
                <div className="card-body" style={{minHeight: '150px'}}>
                  <p className="card-text">{this.props.title} </p>
                  <p>by <span style={{color:'#28a745'}}>{this.props.user}</span></p>
                </div>
            </div>
            <div style={{textAlign: 'center', paddingTop: '5px'}}>
            {this.props.following == 1  ? 
                  <button className='btn btn-success'>following <FontAwesomeIcon icon={faSync} color='#28a745' />  <span className="label label-default">{this.props.votes}</span></button>
                    : 
                    <button className='btn btn-default' onClick={this.followIdea(this.props.dataId)} >follow <FontAwesomeIcon icon={faSync} color='gray' />  <span className="label label-default">{this.props.votes}</span></button>
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
