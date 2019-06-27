import React, { Component } from 'react'
import HomeHeader from './HomeHeader';
import HomeSlider from './HomeSlider';
import Loader from '../Loader';
import axios from "axios";
import HomeTopic from './HomeTopic';
import Subscribe from './Subscribe'
import Footer from '../components/Footer'

class HomeContainer extends Component {

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
          axios.get("http://localhost:8000/api/get-home-ideas")
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
        return(
        <div>
            <HomeHeader />
            <HomeSlider />
            <Loader showloader={this.state.showloader}/>
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

            <Subscribe />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />  
            <Footer />
                </div>
        )
   }
 }


export default HomeContainer;