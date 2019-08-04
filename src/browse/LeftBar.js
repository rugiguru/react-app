import React, { Component } from 'react'
import {Card,ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faLightbulb } from '@fortawesome/free-solid-svg-icons'
import "./css/LeftBar.css"



class LeftBar extends Component {
 state = {}
 render() {
  return(
   <div className="browse-left-menu">
      <Card >

        <Card.Header >
        <FontAwesomeIcon icon={faList} color='#28a745' /> Featured Ideas
        </Card.Header>

        <ListGroup variant="flush" className="leftbar-group" >
          <ListGroup.Item className="leftbar-item" style={{padding:'0px',paddingLeft:'10px'}}>
          <FontAwesomeIcon icon={faLightbulb} color='#28a745' /> Cras justo odio.
          </ListGroup.Item>
        </ListGroup>

      </Card>
   </div>
    )
   }
 }


export default LeftBar