import React, { Component } from 'react'
import LeftBar from './LeftBar';
import Posts from './Posts';
import RightBar from './RightBar';



class BrowseContainer extends Component {
   
      

 render() {
    
  return(
    <div className='container'>
    <div className='row browse-page '>
    <div className='col-lg-3'>
        <LeftBar />
    </div>

    <div className='col-lg-6'>
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