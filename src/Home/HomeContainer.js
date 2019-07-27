import React, { Component } from 'react'
import HomeHeader from './HomeHeader';
import HomeSlider from './HomeSlider';
import Loader from '../Loader';
import axios from "axios";
import HomeTopic from './HomeTopic';
import Subscribe from './Subscribe'
import Footer from '../components/Footer'
var {API_URL} = require("../assets/config");

class HomeContainer extends Component {

    constructor(){
        super();
        
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
<<<<<<< HEAD
        
          axios.get(API_URL + "api/get-home-ideas")
=======
        const token = localStorage.getItem('authKey');
        let URL = '';
        var config = {};
        if(token){
           URL = API_URL + `api/get-home-ideas-auth`;
            config = {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ` + token
        }
        } else {
           URL = API_URL + `api/get-home-ideas`;
              config = {
            'Accept' : 'application/json'
        }
        }
          axios.get(URL, {headers : config})
>>>>>>> 8ac0f31db661313d3913eaa98d3b3a82021d60d3
            .then(res => {
              if (res.data && res.data.status === 1) {
                const topics = res.data.data;
                console.log(topics);
                this.setState({ topics: topics, showloader:false});
              } 
              
            })
            .catch(e => {console.error(e); throw e;});
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
                    <HomeTopic title={topic.title} user={topic.user_name} follow={topic.votes} following={topic.following}  key={topic.id} dataId={topic.id} votes={topic.votes}/>
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