import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router';

import './app.css'

class Page3 extends Component {

  render(){

    console.log(this)
    return(
      <div>
      <h1><Link to="/">index</Link></h1>
      <p><Link to="page3/Animation_1">动画1</Link></p>
      <p><Link to="page3/Animation_2">动画22</Link></p>

{/* <ReactCSSTransitionGroup
//       component="div"
//       transitionName="example"
//       transitionEnterTimeout={500}
//       transitionLeaveTimeout={500}
//     >
//
//     </ReactCSSTransitionGroup>*/}

      </div>
    )
  }
}



export default Page3;
