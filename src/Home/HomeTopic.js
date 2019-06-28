import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import './css/HomeTopic.css'

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
              "http://api.ideasup.in/api/following-idea",
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
        axios.post("http://api.ideasup.in/api/follow-idea",
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
            {follwingIds === 1 ? 
                  <button className='btn btn-success'>following <FontAwesomeIcon icon={faSync} color='#28a745' />  <span className="label label-default">{this.props.votes}</span></button>
                    : 
                    <button className='btn-sm' onClick={this.followIdea(this.props.dataId)}>follow <FontAwesomeIcon icon={faSync} color='black'/>  
                    <span className="label label-default"> {this.props.votes}</span></button>
            }
            </div>
        </div>
        );
    }
}

export default withRouter(HomeTopic);
