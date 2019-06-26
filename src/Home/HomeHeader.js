import React, { Component } from 'react'


/**
* @author
* @class HomeHeader
**/

class HomeHeader extends Component {
 state = {}
 render() {
  return(
    <div className='poller module-home'>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="font-weight-light"></h1>
              <p className='text-center'>Inspiration from within</p>
              <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
            </div>
        </div>
    </div>
</div>

    )
   }
 }



export default HomeHeader;