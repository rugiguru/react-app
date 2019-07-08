import React, { Component } from "react";
import { css } from '@emotion/core';
import {Carousel} from "react-bootstrap"
import { RotateLoader } from 'react-spinners';
import Image1 from '../assets/images/img1.jpg'
import Image2 from '../assets/images/img2.jpg'
import Image3 from '../assets/images/img3.jpg'
import Image4 from '../assets/images/img4.jpg'
import Image7 from '../assets/images/img7.jpg'
import Image8 from '../assets/images/img8.jpg'
import axios from "axios";
import Footer from './Footer'
import HomeTopic from '../Home/HomeTopic';


const override = css`
    margin : 5px;
    margin-top : 50px;

`;

var {API_URL} = require("../assets/config");

 
class Home extends Component {
  constructor(){
    super();
    this.getStarted = this.getStarted.bind(this);
    this.register = this.register.bind(this);
    this.browse = this.browse.bind(this);
    this.getAllTopics = this.getAllTopics.bind(this);
   
    this.state = {
      topics : [], showloader : false
    }
  }

  componentDidMount()
  {
    this.setState({showloader:true})
    this.getAllTopics();
  }

  getAllTopics() {
      axios.get(API_URL + "api/get-home-ideas")
        .then(res => {
          if (res.data && res.data.status === 1) {
            const topics = res.data.data;
            this.setState({ topics: topics, showloader:false});
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
                    <p className='text-center'>Inspiration from within</p>
                    <button className="btn btn-success" onClick={this.getStarted}>Get Started!</button>
                  </div>
              </div>
          </div>
      </div>

        <hr style={{width:'75%'}}/>
        <div style={{width: '80%',height:'80%', margin: '0 auto'}}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image8}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image7}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

<hr style={{width:'75%'}}/>
</div>
     
      <div style={{marginTop : '50px', marginLeft : '700px'}}>
        <RotateLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#28a745'}
          loading={this.state.showloader}
        />
      </div> 

      <div className='container module-ideas'>
          <div className='row'>
          {
            this.state.topics.map(topic => (
              <HomeTopic title={topic.title} user={topic.user_name} follow={topic.votes} key={topic.id} dataId={topic.id} votes={topic.votes}/>
            ))
          }
          </div>
      </div>
            
      <hr style={{width:'75%'}}/>

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