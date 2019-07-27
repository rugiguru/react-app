import React, { Component } from 'react'
import {Card,ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'



class RightBar extends Component {
 state = {}
 render() {
  return(
    <div className="browse-right-menu">
      <Card >
        <Card.Header>Recent Activity</Card.Header>
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


export default RightBar