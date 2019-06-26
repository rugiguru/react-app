import React , {Component} from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Topic from './Topic'
import CreateTopic from './CreateFeed'
import Register from './Register'
import Profile from './Profile'
import PostDetail from './PostDetail'
import Logo from '../assets/images/logo.png'
import '../assets/css/notification.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import HomeContainer from "../Home/HomeContainer";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state= {
            token: '', user_name : ''
        } 
    }

    componentDidMount(){
        const key = localStorage.getItem("authKey");
        let userName = localStorage.getItem('user_name');
        if(key){
            this.setState({token:key, user_name:userName})
        }
        
    }

    logout(){
        localStorage.clear();
        window.location.reload();
    }
    
    render() {
        
        return(
        <Router>
            <div className='navigate'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
                <Link className='navbar-brand main-text' to='/' style={{color: 'green',fontFamily:'Helvetica',fontWeight:'bolder'}}><FontAwesomeIcon icon={faLocationArrow} color='green'/> Ideasup</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className='navbar-brand' to='/' >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='navbar-brand' to='/topics'>BROWSE</Link>
                        </li>
                        { !this.state.token ?
                        <li className="nav-item">
                            <Link className='navbar-brand' to='/register'>SIGNUP</Link>
                        </li> : ''
                        }
                        <li className="nav-item">
                            <Link className='navbar-brand' to='/about'>ABOUT</Link>  
                        </li>
                    </ul>
                    
                    {this.state.token ?
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className='navbar-brand' to=''> 
                                <FontAwesomeIcon icon={faBell} color='black'/> 
                                <span className="badge badge-notify">3</span>
                            </Link>  
                        </li>
                        <li className="nav-item dropdown">
                      
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{'paddingRight': '5em'}}>
                            Welcome {this.state.user_name}
                            </a>
                        <div className="dropdown-menu">
                            <Link className='dropdown-item' to='/profile' >Profile</Link>
                            <a className="dropdown-item" href="#">My Posts</a>
                            <a className="dropdown-item" href="#">Settings</a>
                            <a className="dropdown-item" onClick={this.logout}>Logout</a>
                        </div>
                        </li>
                    </ul>
                    : ''}
                </div>     
            </nav>
                <link to='/login'></link>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/topics" component={Topic} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/about"/>
            <Route path="/create-feed" component={CreateTopic}/>
            <Route path="/post-details/:id" component={PostDetail}/>
            <Route path="/profile" component={Profile}/>
            </div>
        </Router>  
        );
    }
}

export default Navigation;