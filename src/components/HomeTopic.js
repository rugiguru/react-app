import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

class HomeTopic extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            topics: []
        }
    }

    render(){
        return(
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                  <p className="card-text">{this.props.title} </p>
                  <p>by <span style={{color:'#28a745'}}>{this.props.user}</span></p>
                  <p style={{color:'#28a745'}}>following <FontAwesomeIcon icon={faSync} color='#28a745'/>  <span className="label label-default">5</span></p>
                  <button className="btn btn-success no-border btn-sm">Read</button>
                </div>
            </div>
        </div>
        );
    }
}

export default HomeTopic;
