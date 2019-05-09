import React , { Component } from 'react';

class Subscribe extends Component {

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
            <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Recent Activity</strong>
                </h5>
                <div className="card-body px-lg-5">
                  <form className="text-left" >
                      <li>Join our mailing list. We write rarely, but only the best content.</li>
                      <li>Join our mailing list. We write rarely, but only the best content.</li>
                      <li>Join our mailing list. We write rarely, but only the best content.</li>
                      <li>Join our mailing list. We write rarely, but only the best content.</li>
                  </form>
              </div>
            </div>
            </div>
          
          </div>
      </div>
        )
    }
}

export default Subscribe;