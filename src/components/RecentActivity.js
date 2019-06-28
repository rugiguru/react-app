import React, { Component } from 'react';
import axios from 'axios';

class RecentActivity extends Component {
    constructor(props){
        super(props);
        this.getRecentActivity = this.getRecentActivity.bind(this);

        this.state = {
            recentActivity : []
        }
    }
    componentDidMount()
    {
    this.getRecentActivity()
    }

    getRecentActivity() {
        axios.get("http://api.ideasup.in/api/recent-activity")
          .then(res => {
            if (res.data && res.data.status === 1) {
              const recentActivity = res.data.data;
              this.setState({ recentActivity: recentActivity });
            } 
          })
          .catch(e => {});
      }
    
    render(){
        return(
            <div className='col-sm-6'>
            <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Recent Activity</strong>
                </h5>
                <div className="card-body px-lg-5">
                        <ul className="list-group" style={{width : '100%'}}>
                            {this.state.recentActivity.map(row => (
                            <li className="list-group-item disabled" key={row.id}>
                            <span style={{color:'#28a745'}}>{row.user_name}</span> followed the idea <span style={{color:'black'}}>{row.title}</span>
                            </li>
                            ))}
                        </ul>
              </div>
            </div>
            </div>
        )
    }
}

export default RecentActivity;