import React, {Component} from 'react';
import axios from 'axios';
import '../assets/css/profile.css'
import Moment from 'react-moment';
var {API_URL} = require("../assets/config");

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: '', ismage : false, message : '', flashbox : false, profileMessage : ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.getUserProfile = this.getUserProfile.bind(this);
      }

      componentDidMount(){
        let token = localStorage.getItem('authKey');
        if(!token){
            this.props.history.push('/register')
        } else {
                this.getUserProfile()
        }
     }

     getUserProfile() {
        let token = localStorage.getItem('authKey');
        var config = {
            'Authorization' : 'Bearer ' + token,
            'Content-Type' : 'multipart/form-data',
        }
         axios.get(API_URL + `api/get-user-profile`, {headers: config})
         .then(res => {
            if(res.data.status === 1){
              this.setState({profileMessage:res.data.data});
              
            } else if (res.data.status === 0){
              this.setState({profileMessage:res.data.messages });
            }
             else {
              this.setState({"error":1,"profileMessage":res.data.message});
            }
          }).catch((error) => {
            this.setState({"error":1,"message":"Unable to Authenticate"});
          });

          
     }
 
    
      _handleSubmit(e) {
        e.preventDefault();
        
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            ismage : true
          });
        }
    
        reader.readAsDataURL(file)

        let data = new FormData();
        data.append(
            "file", file
          );
          let token = localStorage.getItem('authKey');
        var config = {
            'Authorization' : 'Bearer ' + token,
            'Content-Type' : 'multipart/form-data',
        }
        axios.post(API_URL + `api/update-profile`,
            data,{headers: config})
    .then(res => {
      if(res.data.status === 1){
        this.setState({message:res.data.message, flashbox : true});
        
      } else if (res.data.status === 0){
        this.setState({message:res.data.messages, flashbox : true});
      }
       else {
        this.setState({"error":1,"message":res.data.message, flashbox : true});
      }
    }).catch((error) => {
      this.setState({"error":1,"message":"Unable to Authenticate"});
    });

      }

    render(){
        
        let imagUrl = API_URL + 'profilepics/' + this.state.profileMessage.profile_pic;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} className="rounded-circle img-responsive"  style={{height: '215px', width: '215px'}}/>);
        }
        return(
                <div>
                    <hr />
<div className="container bootstrap snippet profile">
    <div className="row">
        <div className="col-sm-10">
            <h1>{this.state.profileMessage.u_name}</h1>
            {
                this.state.flashbox ? <div className="alert alert-success" role="alert">{this.state.message}
                </div> : ''
            }
        </div>
        <div className="col-sm-2">
            
            {this.state.ismage ? $imagePreview : <img title="profile image" className="rounded-circle img-responsive" src={imagUrl} style={{height: '215px', width: '215px'}} />}
        <div>
            <form  onSubmit={this._handleSubmit}>
                <input type="file" id='profilePic'  onChange={this._handleImageChange} />
                
            </form>  
      </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-3">
           

            <ul className="list-group">
                <li className="list-group-item text-muted" >Profile</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong>Joined</strong></span> <Moment format="DD/MM/YYYY">
                {this.state.profileMessage.created_at}
            </Moment></li>
                <li className="list-group-item text-right"><span className="pull-left"><strong>email</strong></span> {this.state.profileMessage.email}</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong>User name</strong></span> {this.state.profileMessage.u_name}</li>

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
    
        <div className="col-sm-9">

            <ul className="nav nav-tabs" id="myTab">
            <li  className="active"><a href="#settings" data-toggle="tab">About</a></li>
                <li><a href="#messages" data-toggle="tab">Messages</a></li>
            </ul>

            <div className="tab-content">
               
               
                <div className="tab-pane" id="messages">

                    <h2></h2>

                    <ul className="list-group">
                        <li className="list-group-item text-muted">Inbox</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Here is your a link to the latest summary report from the..</a> 2.13.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Hi Joe, There has been a request on your account since that was..</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Nullam sapien massaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Thllam sapien massaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Wesm sapien massaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">For therepien massaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Also we, havesapien massaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>
                        <li className="list-group-item text-right"><a href="#" className="pull-left">Swedish chef is assaortor. A lobortis vitae, condimentum justo...</a> 2.11.2014</li>

                    </ul>

                </div>
          
                <div className="tab-pane active" id="settings">

                    <hr />
                    <form className="form" action="##" method="post" id="registrationForm">
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label >
                                    <h4>Tell us About your self</h4></label>
                                <textarea  className="form-control" rows='10' id='about' name="about"  placeholder="Tell us about you self like your profession, passion and contact info" title="enter your first name if any." >
                                {this.state.profileMessage.about}
                                </textarea>
                            </div>
                        </div>
                       
                        <div className="form-group">
                            <div className="col-xs-12">
                                <br />
                                <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                
                            </div>
                        </div>
                    </form>
                </div>

            </div>
           
        </div>
       

    </div>
  
</div>

<br />
<br />
<br />
<br />
<br />
</div>
              
        )
    }
}

export default Profile;
