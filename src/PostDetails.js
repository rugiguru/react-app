import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';

export default class PostDetails extends Component {
    constructor(props){
        super(props);
        this.state = { show: false }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
        //const postId = this.props.match.params.id
       // alert(postId)
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
        
      }
    
    render(){
        return(
            <div className="App">
               <Button variant="primary" onClick={this.handleShow()}>
                                  View
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body></Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                      Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                      Save Changes
                                    </Button>
                                  </Modal.Footer>
                                </Modal>  
            </div>
        );
    }
}