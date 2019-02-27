
import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import Heading from "./Heading";
  import TodoApp from "./TodoApp";
  import Login from "./Login";
  import Post from "./Post";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/headings">Headins</NavLink></li>
            <li><NavLink to="/todo">Listing</NavLink></li>
            <li><NavLink to="/login">Register</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path='/headings' component={Heading}/>
            <Route path='/todo' component={TodoApp}/>
            <Route path='/login' component={Login}/>
            <Route path='/posts' component={Post}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;