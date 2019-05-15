import React , { Component } from 'react';
import RecentActivity from './RecentActivity';
import axios from 'axios';

class Subscribe extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
        this.state = {
            emailError: false, email:'', message : false
        }
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

       let data = { email : this.state.email }
        axios.post("http://localhost:8000/api/subscribe", data)
          .then(res => {
            if (res.data && res.data.status === 1) {
              this.setState({message: res.data.message, emailError : false})
            }  else if (res.data.status === 0) {
              this.setState({message: res.data.message, emailError : false})
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
                {
                  this.state.message ? <div className="alert alert-success" role="alert" style={{fontSize: '12px'}}>{this.state.message}
                  </div> : ''
                }
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
            <RecentActivity />
          
          </div>
      </div>
        )
    }
}

export default Subscribe;