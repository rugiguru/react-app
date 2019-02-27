import React, { Component } from "react";


export default class PostDetails extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const postId = this.props.match.params.id
        alert(postId)
    }


    render(){
        return(
            <div>
                <p> Hi tjhis is new Component</p>
            </div>
        )
    }
}