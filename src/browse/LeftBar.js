import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'
import {Card,ListGroup} from "react-bootstrap";
import "./css/LeftBar.css"



class LeftBar extends Component {
 state = {}
 render() {
  return(
   <div className="browse-left-menu">
      <Card >
        <Card.Header>Featured Ideas</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
      </Card>
   </div>
    )
   }
 }


export default LeftBar