import React, { Component } from 'react'
import { css } from '@emotion/core';
import {Carousel} from "react-bootstrap"
import Image1 from '../assets/images/img1.jpg'
import Image2 from '../assets/images/img2.jpg'
import Image3 from '../assets/images/img3.jpg'
import Image4 from '../assets/images/img4.jpg'
import Image7 from '../assets/images/img7.jpg'
import Image8 from '../assets/images/img8.jpg'

/**
* @author
* @class HomeSlider
**/

class HomeSlider extends Component {

 render() {
  return(
   <div>
         <hr style={{width:'75%'}}/>
        <div style={{width: '60%',height:'70%', margin: '0 auto'}}>
          <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Meet Developers, investors and with even minded people to colllbarate and work</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image8}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image7}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>

<hr style={{width:'75%'}}/>
</div>
   </div>
    )
   }
 }



export default HomeSlider