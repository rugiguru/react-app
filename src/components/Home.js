import React, { Component } from "react";
import appreciate from '../assets/images/like.png';

 
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
      <div>
        
      <div className='poller  module-home'>
          <div className="container welcome">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="font-weight-light">Welcome to
                    ideas-poller!</h1>
                    <p className='text-center'>Start up ideas from within</p>
                    <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
                  </div>
              </div>
          </div>
      </div> 
        <hr style={{width:'75%'}}/>
      <div className='container module-ideas'>
          <div className='row'>
            <div className='col-md-3'>
              <div className="card">
                  <div className="card-body">
                   
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p>by Anonymous</p>
                    <p>Follow </p>
                    <button className="btn btn-success no-border btn-sm">Read</button>
                  </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className="card">
                  <div className="card-body">
                  
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p>by Anonymous</p>
                    <p>Follow </p>
                    <button className="btn btn-success no-border btn-sm">Read</button>
                  </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className="card">
                  <div className="card-body">
                    
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p>by Anonymous</p>
                    <p>Follow </p>
                    <button className="btn btn-success no-border btn-sm">Read</button>
                  </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div className="card">
                  <div className="card-body">
                   
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p>by Anonymous</p>
                    <p>Appreciate </p>
                    <button className="btn btn-success no-border btn-sm">Read</button>
                  </div>
              </div>
              <br />
              <button style={{float: 'right', border:'0px'}} className='bt-sm'>View More >></button>
            </div>
              
          </div>
      </div>
      <hr style={{width:'75%'}}/>
      
      <div className='conatiner module-two'>
          <div className='row'>
            <div className='col-sm-6 subscribe'>
            <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Subscribe</strong>
                </h5>
                <div className="card-body px-lg-5">
                  <form className="text-center" >
                      <p>Join our mailing list. We write rarely, but only the best content.</p>
                      <div className="md-form">
                          <input type="email" id="materialSubscriptionFormEmail" className="form-control" />
                          <label >E-mail</label>
                      </div>
                      <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Subscribe</button>
                  </form>
              </div>
            </div>
            </div>
            <div className='col-sm-6'>
            </div>
          
          </div>
      </div>
        <br />
        <br />

        <br />
        <br /><br />
        <br />

        <div className="footer">
          <p>© 2018 Copyright: ideaspoller.com</p>
        </div>

</div>
    );
  }
}
 
export default Home;