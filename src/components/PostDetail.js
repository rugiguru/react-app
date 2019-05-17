import React, {Component} from 'react';
import axios from "axios";
class PostDetail extends Component {
    constructor(props){
        super(props);
        this.getPostDetail = this.getPostDetail.bind(this);
        this.state = {
            postdetail : []
        }
    }

    componentDidMount(){
        this.getPostDetail();
    }

    getPostDetail(){
        let postid = this.props.match.params.id;
        let data = {
            id : postid
        }
        axios.post(
            "http://localhost:8000/api/post-details" , data
          )
            .then(res => {
              if (res.data && res.data.status === 1) {
                const postdetail = res.data.data;
                this.setState({ postdetail: postdetail });
              } 
            })
            .catch(e => {});
    }


    render(){
        return(
           <div className='conatiner' style={{width : '80%', margin : '0 auto', paddingTop : '70px'}}>
                <div className='row' >
                <div className="col-lg-8">
                    <h1 className="mt-4">{this.state.postdetail.title}</h1>
                        <p className="lead">
                            by
                            <a href="#"> {this.state.postdetail.user_name}</a>
                        </p>
                    <hr />
                    <p>Posted on {this.state.postdetail.created_at}</p>
                        <hr />
                        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
                        <hr />
                        <p className="lead">{this.state.postdetail.description}</p>
                        <hr />
                        <br />
                        <br />
                        <br />
                        <br />
                </div>

        <div className="col-md-4">
                <div className="card my-4">
                    <h5 className="card-header">Details</h5>
                    <div className="card-body">
                    <div className="input-group">
                       <ul>
                           <li>
                               Following : 3
                           </li>
                           <li>
                               Views     : 10 
                           </li>
                           <li>
                            Collabs   : 10
                           </li>
                       </ul>
                    </div>
                    </div>
                </div>
      
        <div className="card my-4">
          <h5 className="card-header">Tags or Key Words</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-unstyled mb-0">
               <li>
                   {this.state.postdetail.tags}
               </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      </div>
           </div>
           </div>
        )
    }
}

export default PostDetail;