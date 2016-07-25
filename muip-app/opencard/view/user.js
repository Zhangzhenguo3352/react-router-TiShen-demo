import React, { Component } from 'react';
import { Link } from 'react-router';

class User extends Component {
  render(){
    return(
      <h1>
      <p><Link to="/">index</Link></p>
      <p><Link to="/page2">page2</Link></p>
      <p><Link to="/page3">page333333333</Link></p>
      <p><Link to="/user">{id}</Link></p>
      </h1>
    )
  }
}
export default User;
