import React, { Component } from 'react'
import Moment from 'react-moment';

export default class LeftMenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item text-muted" >Profile</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Joined</strong></span> 
                    <Moment format="DD/MM/YYYY">
                        {this.props.profileMessage.created_at}
                    </Moment></li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>email</strong></span> {this.props.profileMessage.email}</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>User name</strong></span> {this.props.profileMessage.u_name}</li>
                </ul>
                <br />
                <ul className="list-group">
                    <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                    <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                </ul> 
            </div>
        )
    }
}
