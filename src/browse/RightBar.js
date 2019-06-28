import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'



class RightBar extends Component {
 state = {}
 render() {
  return(
   <div>
       <div className="panel panel-success struck" >
                <div className="panel-heading text-center text-bold side-head" >Most followed <FontAwesomeIcon icon={faSync} color='#28a745'/></div>
                <div className="panel-body text-left"><ul>
                  <li>dfdf </li>
                  <li>dfdf fvd</li>
                  <li>rt rt </li>
                  <li>dff fgfg</li>
                </ul></div>
              </div>
   </div>
    )
   }
 }


export default RightBar