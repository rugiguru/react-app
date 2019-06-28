import React, { Component } from 'react'
import LeftBar from './LeftBar';
import Posts from './Posts';
import RightBar from './RightBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faSync } from '@fortawesome/free-solid-svg-icons'



class BrowseContainer extends Component {
   
      

 render() {
    
  return(
    <div className='module-topic'>
    <div className='row'>
    <div className='col-lg-2'>
        <LeftBar />
    </div>

    <div className='col-lg-7'>
          <Posts />
    </div>

    <div className='col-lg-3'>
        <RightBar />
    </div>


    </div>
    </div>


    

    )
   }
 }



export default BrowseContainer