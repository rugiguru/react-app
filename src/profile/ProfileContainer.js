import React, { Component } from 'react'
import axios from 'axios';
import '../assets/css/profile.css'
import './profile.css'
import ProfilePic from './ProfilePic';
import LeftMenu from './LeftMenu';
import ProfileTabs from './ProfileTabs';

var {API_URL} = require("../assets/config");

export default class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: '', ismage : false, message : '', flashbox : false, profileMessage : '',
          about : ''
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
     };

     getUserProfile() {
        let token = localStorage.getItem('authKey');
        var config = {
            'Authorization' : 'Bearer ' + token,
            'Content-Type' : 'multipart/form-data',
        }
         axios.get(API_URL + `api/get-user-profile`, {headers: config})
         .then(res => {
            if(res.data.status === 1){
              this.setState({profileMessage:res.data.data, message:res.data.message});
              
              
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
        this.setState({message:res.data.message});
        
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
        
        var imagUrl = API_URL + 'profilepics/' + this.state.profileMessage.profile_pic;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} className="rounded-circle img-responsive" alt="Profile Pic"  style={{height: '215px', width: '215px'}}/>);
        }
        return(
            <div>
                <hr />
                <div className="container bootstrap snippet profile">

                    <div className="row">
                        <div className="col-sm-6">
                            <h1>{this.state.profileMessage.u_name}</h1>
                            {
                                this.state.flashbox ? <div className="alert alert-success" role="alert">{this.state.message}
                                </div> : ''
                            }
                        </div>

                        <div className="col-sm-6">
                        {this.state.ismage ? $imagePreview : <img title="profile image" alt="Profile Pic" className="rounded-circle img-responsive" src={imagUrl} style={{height: '215px', width: '215px'}} />}
                       <ProfilePic />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <LeftMenu profileMessage={this.state.profileMessage}/>
                        </div>
    
                        <div className="col-sm-9">
                            <ProfileTabs />
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


