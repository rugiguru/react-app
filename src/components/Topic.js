import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Common from './Common';

class Topic extends Component {

    constructor(props){
        super(props);
        this.getAllTopics = this.getAllTopics.bind(this);
        this.state = { topics : [], hasMoreItems: true, }
    }

    componentDidMount() {
        this.getAllTopics();
      }

    getAllTopics() {
        Common.request(
          "get",
          "http://localhost:8000/api/topics"
        )
          .then(res => {
            if (res.data && res.data.status == 1) {
              const topics = res.data.data;
              this.setState({ topics: topics, hasMoreItems:false });
              
            }
          })
          .catch(e => {});
      }
    
    render(){
        var items = [];
        this.state.topics.map(topic => {
            items.push( 
            <div  key={topic.id}>
            <div className='row question'>
                <div className='col-lg-10' >
                    {topic.title}
                </div>
                <div className='col-lg-2'>
                   <div className='row question-stats'>
                        <div className='col-lg-4 text-center'>Views <p>{topic.views}</p></div>
                        <div className='col-lg-4 text-center'>Votes <p>{topic.votes}</p></div>
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
            <h2 className='text-center user'>
            Topics
            <button className="btn btn-success btn-sm pull-right">Create new topic</button>
            </h2>
            
            <div className='row'>
            <div className='col-lg-2'>
              <div class="panel panel-success struck" >
                <div class="panel-heading text-center" style={{backgroundColor:'#efefef', borderRadius: '.5rem'}}>Recently Viewed</div>
                <div class="panel-body"></div>
              </div>
            </div>
            <div className='col-lg-8'>
            <InfiniteScroll pageStart={0} loadMore={this.getAllTopics} hasMore={this.state.hasMoreItems}
                        loader={<div className="loader" key={0}>Loading ...</div>} >  
                <div className="tracks">
                    {items}
                </div>
           </InfiniteScroll>
            </div>
            <div className='col-lg-2'>
            <div class="panel panel-success struck" >
                <div class="panel-heading text-center" style={{backgroundColor:'#efefef', borderRadius: '.5rem'}}>Most Voted</div>
                <div class="panel-body"></div>
              </div>
            </div>
            </div>
            
            </div>
           
          
        );
    }
}

export default Topic;