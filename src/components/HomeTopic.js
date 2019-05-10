import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

class HomeTopic extends Component {
    constructor(props){
        super(props);
       this.getUserData = this.getUserData.bind(this);
       
        this.state = {
            following: 0
        }
    }

    componentDidMount(){
       this.getUserData();
      
    }

    getUserData(ideaid){
       
        const token = localStorage.getItem('authKey')
        let config = {
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + token
        }

        if(token)
        {
            axios.post(
                "http://localhost:8000/api/following-idea",
                config
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

   

    render(){
        return(
        <div className='col-md-3' style={{minHeight: '100px'}}>
            <div className="card">
                <div className="card-body">
                  <p className="card-text">{this.props.title} </p>
                  <p>by <span style={{color:'#28a745'}}>{this.props.user}</span></p>
                    {this.state.following === 1 ? 
                  <p style={{color:'#28a745'}} >following <FontAwesomeIcon icon={faSync} color='#28a745' />  <span className="label label-default">5</span></p>
                    : 
                    <p>follow <FontAwesomeIcon icon={faSync} color='#28a745'/>  <span className="label label-default">5</span></p>
                    }
                  <button className="btn btn-success no-border btn-sm">Read</button>
                </div>
            </div>
        </div>
        );
    }
}

export default HomeTopic;
