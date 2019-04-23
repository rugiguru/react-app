import React, { Component } from "react";
 
class Home extends Component {

  constructor(){
    super();

    this.getStarted = this.getStarted.bind(this);
    this.register = this.register.bind(this);
  }

  getStarted(){
      this.props.history.push('/register')
  }

  register(){
    this.props.history.push('/register')
  }


  render() {
    return (
      <div className='poller  module-home'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="font-weight-light">Welcome to
                    !</h1>
                    <p className='text-center'>Struck deciding some thing? Raise a topic, share and collect the polls to decide among your team,friends, family, collegues etc...</p>
                    <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
                  </div>
              </div>
          </div>

          <div style={{paddingTop:'10px'}}>
          <div className="container module-home" >
              <div className="row" >
                  <div className="col-lg-12 text-center">
                    <h1 className="font-weight-light">Most Voted Topics</h1>
                      <ul className='text-left'>
                        <li>Register here if you are new to this app or sign in if already registered.</li>
                        <li>Create topic or questions from here.</li>
                        <li>Add members by entering their e-mails.</li>
                        <li>Finally get all the poll result.</li>
                        <li>Make the topic public or save as private.</li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
      </div>

         
    );
  }
}
 
export default Home;