import React , {Component} from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Topic from './Topic'
import CreateTopic from './CreateFeed'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state= {
            token: null
        }
        
    }

    componentDidMount(){
        const key = localStorage.getItem("authKey");
        this.setState({token:key})
    }
    
    render() {
        return(
        <Router>
            <div className='navigate'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
                <Link className='navbar-brand main-text' to='/' style={{color: 'green',fontFamily:'Helvetica',fontWeight:'bolder'}}>ideasPoller</Link>
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
                            <Link className='navbar-brand' to='/register'>REGISTER</Link>
                        </li> : ''
                        }
                        
                        <li className="nav-item">
                            <Link className='navbar-brand' to='/about'>ABOUT</Link>  
                        </li>

                    </ul>

                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className='navbar-brand' to='/about'></Link>  
                    </li>
                    </ul>
                </div>     
            </nav>
                <link to='/login'></link>
            <Route exact path="/" component={Home}/>
            <Route  path="/topics" component={Topic} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/about"/>
            <Route path="/create-feed" component={CreateTopic}/>
            </div>
        </Router>  
        );
    }
}

export default Navigation;