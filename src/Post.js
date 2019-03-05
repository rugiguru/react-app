import React, { Component } from "react";

import "./clean-blog.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PostDetails from "./PostDetails";

export default class Posts extends Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            post:[],
            currentPage: 1,
            todosPerPage: 10,
            show: false
        }
        this.handleClick = this.handleClick.bind(this);
       
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    componentDidMount(prevProps){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({posts: posts });    
    })
        .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.posts.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.posts.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
        return(
                <div className="container">
                <ul id="page-numbers" className="pagination">
                    {renderPageNumbers}
                </ul>
                    <div className="row"> 
                    {  currentTodos.map((item, key) =>
                            <div className="col-lg-4 mb-4">
                                <div className="card h-100">
                                    <h4 className="card-header">Post Title</h4>
                                    <div className="card-body">
                                        <p className="card-text">{ item.body}</p>
                                    </div>
                              <div className="card-footer">                  
                               
                              </div>
                                </div>
                            </div>
                         )
                    }
                    </div>
                </div>
        );
    }
}