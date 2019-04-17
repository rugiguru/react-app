import React, {Component } from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";



class AppCrud extends Component {
    render() {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}

export default AppCrud;