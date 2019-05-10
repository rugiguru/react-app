import React , { Component } from 'react';
import axios from 'axios';

class Subscribe extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getRecentActivity = this.getRecentActivity.bind(this);
        this.state = {
            emailError: false, email:'', recentActivity : []
        }
    }

    componentDidMount()
    {
        this.getRecentActivity();
    }

    handleChange(event) {
        const inputKey = event.target.name;
        this.setState({[inputKey]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.email){
          this.setState({emailError: true});
          return false;
        }


    }

    getRecentActivity() {
        axios.get("http://localhost:8000/api/recent-activity")
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

            <div className='conatiner module-two'>
          <div className='row'>
            <div className='col-sm-6 subscribe'>
            <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Subscribe</strong>
                </h5>
                <div className="card-body px-lg-5">
                  <form className="text-center" onSubmit={this.handleSubmit}>
                      <p>Join our mailing list. We write rarely, but only the best content.</p>
                      <div className="md-form">
                          <input type="email" name='email'  className="form-control" onChange={this.handleChange}/>
                          {this.state.emailError ? <small className='error-class'>Email is required</small> : ''} <br />
                          <label >E-mail</label>
                      </div>
                      <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Subscribe</button>
                  </form>
              </div>

             
            </div>
            </div>
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
          
          </div>
      </div>
        )
    }
}

export default Subscribe;