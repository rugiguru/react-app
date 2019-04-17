import React, { Component } from "react";
import AppCrud from "./crud/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

 
class App extends Component {
  render() {
    return (
      
        <AppCrud />
      
    );
  }
}
 
export default App;