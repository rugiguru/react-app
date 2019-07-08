import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import axios from "axios";
var {API_URL} = require("../assets/config");

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.getPostDetail = this.getPostDetail.bind(this);
        this.updateViews = this.updateViews.bind(this);
        this.getRecentActivity = this.getRecentActivity.bind(this);
        this.collab = this.collab.bind(this);
        this.state = {
            postdetail : [],
            recentActivity : [],
            validated: false,
            collab: false,
            flashbox : false

        }
    }

    componentDidMount(){
        this.getPostDetail();
        this.getRecentActivity()
    }

    collab(){
        this.setState({collab : true})
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit(event, id) {

        const form = event.currentTarget;
        const ideaid = id
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });

        let token = localStorage.getItem('authKey');
        if(token)
        {
            var data =  {
                title: this.state.title,
                description: this.state.details,
                ideaId: ideaid
            }
            axios.post(API_URL +`api/collab`, data, {headers: {
                    'Accept' : 'application/json',
                    'Authorization' : 'Bearer ' + token
                }})
                .then(res => {
                    if(res.data && res.data.status === 1){
                        this.setState({message: res.data.message, flashbox : true})
                    } else {
                        this.setState({"error":1,"message":res.data.message, flashbox:'true'});
                    }
                }).catch((error) => {
                this.setState({"error":1,"message":"Unable to Authenticate"});
            });
        } else {
            this.props.history.push('./register');
        }
    }

    getPostDetail(){
        let postid = this.props.match.params.id;
        let data = {
            id : postid
        }
        axios.post(
            API_URL + "api/post-details" , data
          )
            .then(res => {
              if (res.data && res.data.status === 1) {
                const postdetail = res.data.data;
                this.setState({ postdetail: postdetail });
              } 
            })
            .catch(e => {});
    this.updateViews()
    }

    getRecentActivity() {
        axios.get(API_URL + "api/recent-activity")
            .then(res => {
                if (res.data && res.data.status === 1) {
                    const recentActivity = res.data.data;
                    this.setState({ recentActivity: recentActivity });
                }
            })
            .catch(e => {});
    }

    updateViews() {
      let postid = this.props.match.params.id;
      let data = {
        id : postid
    }

    axios.post(
      API_URL + "api/update-views" , data
    )
      .then(res => {
      })
      .catch(e => {});
    }


    render(){
        const { validated } = this.state;
        return(
           <div className='conatiner' style={{width : '80%', margin : '0 auto', paddingTop : '70px'}}>
                <div className='row' >
                <div className="col-lg-8">
                    <h1 className="mt-4">{this.state.postdetail.title}</h1>
                        <p className="lead">
                            by
                            <a href="#"> {this.state.postdetail.user_name}</a>
                        </p>
                    <hr />
                    <p>Posted on {this.state.postdetail.created_at}</p>
                        <hr />
                        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
                        <hr />
                        <p className="lead">{this.state.postdetail.description}</p>
                        <hr />

                <button className='btn btn-success btn-sm' onClick={this.collab}>Collab</button>
                <br />
            <br />
            {
                this.state.flashbox ? <div className="alert alert-success" role="alert">{this.state.message}
            </div> : ''
    }
            {this.state.collab ?
            <div >
            <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e, this.state.postdetail.id)} >
    <Form.Group controlId="ControlInput1">
            <Form.Label>Role</Form.Label>
            <Form.Control required type="text" placeholder="Enter your designation to know in what way you want to contribuite. Ex: web designing, investor, developer" name='title' onChange={this.handleChange}  />
        <Form.Control.Feedback type="invalid">
            Please choose a Title.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control required as="textarea" rows="10" placeholder="Enter the details in what way you can contribuite" name='details' onChange={this.handleChange} />
        <Form.Control.Feedback type="invalid">
            Please Enter the details
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="ControlInput3">
            <Form.Control type="submit" value='Submit' size='10'/>
            </Form.Group>

            </Form>
            </div>
                    : ''}


                </div>

        <div className="col-md-4">
                <div className="card my-4">
                    <h5 className="card-header">Details</h5>
                    <div className="card-body">
                    <div className="input-group">
                       <ul>
                           <li>
                               Following : {this.state.postdetail.following}
                           </li>
                           <li>
                               Views     : {this.state.postdetail.views}
                           </li>
                           <li>
                            Collabs   : 10
                           </li>
                       </ul>
                    </div>
                    </div>
                </div>
      
        <div className="card my-4">
          <h5 className="card-header">Tags or Key Words</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-unstyled mb-0">
               <li>
                   {this.state.postdetail.tags}
               </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

        <div className="card my-4">
            <h5 className="card-header">Recent Activity</h5>
        <div className="card-body">
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

export default PostDetail;