import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {

  render(){
    return(
      <h1>
      <p><Link to="/">index11111111</Link></p>
      <p><Link to="/page2">page2</Link></p>
      <p><Link to="/page3">page3</Link></p>
      </h1>
    )
  }
}
export default Index;
