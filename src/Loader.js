import React, { Component } from 'react'
import { css } from '@emotion/core';
import { RotateLoader } from 'react-spinners';

/**
* @author
* @class Loader
**/

const override = css`
    margin : 5px;
    margin-top : 50px;

`;


class Loader extends Component {
 constructor(props){
     super(props);

 }
 render() {
  return(
    <div style={{marginTop : '50px', marginLeft : '700px'}}>
        <RotateLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#28a745'}
          loading={this.props.showloader}
        />
      </div> 
    )
   }
 }


export default Loader