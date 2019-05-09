import React, { Component } from "react";
import axios from "axios";
import Footer from './Footer'
import HomeTopic from './HomeTopic';
import Subscribe from './Subscribe'


 
class Home extends Component {
  constructor(){
    super();
    this.getStarted = this.getStarted.bind(this);
    this.register = this.register.bind(this);
    this.browse = this.browse.bind(this);
    this.getAllTopics = this.getAllTopics.bind(this);
    this.state = {
      topics : []
    }
  }

  componentDidMount()
  {
   
    this.getAllTopics();
  }

  getAllTopics() {
      axios.get("http://localhost:8000/api/get-home-ideas")
        .then(res => {
          if (res.data && res.data.status === 1) {
            const topics = res.data.data;
            this.setState({ topics: topics, hasMoreItems:false });
           
          } 
        })
        .catch(e => {});
    }

  getStarted(){
    this.props.history.push('/register')
  }

  register(){
    this.props.history.push('/register')
  }

  browse(){
    this.props.history.push('/topics')
  }

  render() {
    return (
      <div>
        
      <div className='poller module-home'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="font-weight-light"></h1>
                    <p className='text-center'>djkdh djkfhfj</p>
                    <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
                  </div>
              </div>
          </div>
      </div>

        <hr style={{width:'75%'}}/>

      <div className='container module-ideas'>
          <div className='row'>
          {
            this.state.topics.map(topic => (
              <HomeTopic title={topic.title} user={topic.user_name} follow={topic.votes} key={topic.id}/>
            ))
          }
          </div>
      </div>

      <hr style={{width:'75%'}}/>

     <Subscribe />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />  
<Footer />
</div>
    );
  }
}
 
export default Home;