import React, {Component } from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";



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