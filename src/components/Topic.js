import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { css } from '@emotion/core';
import { RotateLoader } from 'react-spinners';
import axios from "axios";
import '../components/CreateFeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'
const override = css`
    margin : 5px;
    margin-top : 50px;

`;

class Topic extends Component {

    constructor(props){
        super(props);
        this.getAllTopics = this.getAllTopics.bind(this);
        this.crearteFeed = this.crearteFeed.bind(this);
        this.getPostDetails = this.getPostDetails.bind(this);
        this.state = { 
          topics : [], 
          hasMoreItems: true, showloader : false
        }
    }

    componentDidMount() {
      this.setState({showloader:true})
        this.getAllTopics();
      }

    crearteFeed(){
        this.props.history.push('/create-feed')
      }

    getAllTopics() {
        axios.get(
          "http://localhost:8000/api/topics",
          "get"
        )
          .then(res => {
            if (res.data && res.data.status === 1) {
              const topics = res.data.data;
              this.setState({ topics: topics, hasMoreItems:false,showloader:false });
              
            } else {
              this.props.history.push('/login')
            }
          })
          .catch(e => {});
      }

      getPostDetails = param => e => {
        this.props.history.push('/post-details/' + param);
      }
    
    render(){
        var items = [];
        this.state.topics.map(topic => {
            items.push( 
            <div  key={topic.id} onClick={this.getPostDetails(topic.id)} style={{cursor:'pointer'}}>
            <div className='row question'>
                <div className='col-lg-10 module-title' >
                    {topic.title}
                </div>
                <div className='col-lg-2'>
                   <div className='row question-stats'>
                        <div className='col-lg-4 text-center views'>Views <p>{topic.views}</p></div>
                        <div className='col-lg-4 text-center votes'>following <p>{topic.votes}</p></div>
                   </div>
                </div> 
            </div>

          <div className="logo q-time">
            <p className='text-left'>by <span className='user'>{topic.user_name} </span>, published <span className='user'>4 Minutes</span> ago</p>
          </div>
           <hr />
           </div> 
           );}); 
        return(
            <div className='module-topic'>
            <div className='row'>
            <div className='col-lg-2'>
              <div className="panel panel-success struck-left" >
                <div className="panel-heading text-center text-bold side-head  module-category" >Watch Tags <FontAwesomeIcon icon={faTags} color='#28a745'/></div>
                <div className="panel-body category-list"> 
                <ul>
                  <li>dfdf </li>
                  <li>dfdf fvd</li>
                  <li>rt rt </li>
                  <li>dff fgfg</li>
                </ul> </div>
              </div>
            </div>
            <div className='col-lg-7'>
            <div>
              <h2 className="text-center ">Top Posts</h2>
              <div className="text-right top-feeds">
                <button className="btn btn-success" onClick={this.crearteFeed}>Share</button>
              </div>
            </div>
            <hr />

            <p style={{marginTop : '50px', marginLeft : '350px'}}><RotateLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#28a745'}
          loading={this.state.showloader}
        /></p> 
            
            <InfiniteScroll pageStart={0} loadMore={this.getAllTopics} hasMore={this.state.hasMoreItems}
                        loader={<div className="loader" key={0}></div>} >  
                <div className="tracks">
                    {items}
                </div>
           </InfiniteScroll>
            </div>
            <div className='col-lg-3'>
            <div className="panel panel-success struck" >
                <div className="panel-heading text-center text-bold side-head" >Most followed <FontAwesomeIcon icon={faSync} color='#28a745'/></div>
                <div className="panel-body text-left"><ul>
                  <li>dfdf </li>
                  <li>dfdf fvd</li>
                  <li>rt rt </li>
                  <li>dff fgfg</li>
                </ul></div>
              </div>
            </div>
            </div>
            </div>
           
          
        );
    }
}

export default Topic;