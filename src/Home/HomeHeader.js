import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './css/HomeHeader.css'


/**
* @author
* @class HomeHeader
**/

class HomeHeader extends Component {
 constructor(){
   super();
   this.getStarted = this.getStarted.bind(this);
 }

 getStarted(){
  this.props.history.push('/register')
  }
 render() {
  return(
    <div className='poller module-home'>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="font-weight-light"></h1>
              <p className='text-center'>Meet <span style={{color:'green'}}>Developers, Designers, Investors</span> from the crowd of startups, and make this world a better place.</p>
              <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
            </div>
        </div>
    </div>
</div>

    )
   }
 }



export default withRouter(HomeHeader);