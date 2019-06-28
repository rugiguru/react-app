import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'
import "./css/LeftBar.css"



class LeftBar extends Component {
 state = {}
 render() {
  return(
   <div>
        <div className="panel panel-success struck-left" >
                <div className="panel-heading text-center text-bold side-head  module-category" >Watch Tags <FontAwesomeIcon icon={faTags} color='#28a745'/>
                </div>
                <div className="panel-body category-list"> 
                    <ul>
                    <li>dfdf </li>
                    <li>dfdf fvd</li>
                    <li>rt rt </li>
                    <li>dff fgfg</li>
                    </ul> 
                </div>
        </div>
   </div>
    )
   }
 }


export default LeftBar