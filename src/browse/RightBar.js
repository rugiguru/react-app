import React, { Component } from 'react'
import {Card,ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faList } from '@fortawesome/free-solid-svg-icons'



class RightBar extends Component {
 state = {}
 render() {
  return(
    <div className="browse-right-menu">
      <Card >
        <Card.Header><FontAwesomeIcon icon={faList} color='#28a745' /> Recent Activity</Card.Header>
          <ListGroup variant="flush">
           <ListGroup.Item style={{padding:'0px',paddingLeft:'10px'}}>
           <FontAwesomeIcon icon={faEdit} color='#' size='10' style={{fontSize:'10px'}} /> Cras justo odio
            </ListGroup.Item>

            <ListGroup.Item style={{padding:'0px',paddingLeft:'10px'}}>
           <FontAwesomeIcon icon={faEdit} color='#' style={{fontSize:'10px'}}/> Cras justo odio
            </ListGroup.Item>

            <ListGroup.Item style={{padding:'0px',paddingLeft:'10px'}}>
            <FontAwesomeIcon icon={faEdit} color='' style={{fontSize:'10px'}}/> Cras justo odio
            </ListGroup.Item>
            
          </ListGroup>
      </Card>
   </div>
    )
   }
 }


export default RightBar