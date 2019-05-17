import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faWindowRestore } from '@fortawesome/free-solid-svg-icons'

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
              "http://localhost:8000/api/following-idea",
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
        axios.post("http://localhost:8000/api/follow-idea",
              {idea_id : param }, {headers : config})
              .then(res => {
                if (res.data && res.data.status === 1) {
                  window.location.reload();
                  
                } else {
                  this.props.history.push('/login')
                }
              })
              .catch(e => {});
      } else {
        this.props.history.push('/login')
      }
      
    }
    

   

    render(){
      let follwingIds = this.state.following;
        return(
        <div className='col-md-3' style={{minHeight: '100px'}}>
            <div className="card">
                <div className="card-body">
                  <p className="card-text">{this.props.title} </p>
                  <p>by <span style={{color:'#28a745'}}>{this.props.user}</span></p>
                    {follwingIds === 1 ? 
                  <p style={{color:'#28a745'}} >following <FontAwesomeIcon icon={faSync} color='#28a745' />  <span className="label label-default">5</span></p>
                    : 
                    <p>follow <button className='no-border' onClick={this.followIdea(this.props.dataId)}><FontAwesomeIcon icon={faSync} color='#28a745'/>  </button>
                    <span className="label label-default">5</span></p>
                    }
                  <button className="btn btn-success no-border btn-sm">Read</button>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(HomeTopic);
