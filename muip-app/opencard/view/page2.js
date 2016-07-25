import React, { Component } from 'react';
import { Link } from 'react-router'

class Page2 extends Component {
  render(){
    return(
      <h1>
        <p><Link to="/">index</Link></p>
        <p><Link to="page2"> page22222222</Link></p>
        <p><Link to="page3"> page3</Link></p>
      </h1>)
  }
}
export default Page2;
