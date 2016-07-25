import React, { Component } from 'react';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Page2 from './page2.js';
import Index from './index.js';
// import Page3 from './page3.js';

import './app.css'
// import User from './user.js';


class Home extends Component {

  render(){
    const key = this.props.location.pathname.split('/')[1] || 'root'
    return(<h1>
      <ReactCSSTransitionGroup
        component="div" transitionName="swap"
        transitionEnterTimeout={500} transitionLeaveTimeout={500}
      >
        {React.cloneElement(this.props.children || <div />, { key })}
      </ReactCSSTransitionGroup>
      </h1>)
  }
}

class Page3 extends Component {

  render(){

    console.log(this)
    return(
      <div>
      <h1><Link to="/">index</Link></h1>
      <p><Link to="page3/Animation_1">动画1</Link></p>
      <p><Link to="page3/Animation_2">动画22</Link></p>
      <ReactCSSTransitionGroup
          component="div" transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children || <div/>, { key: this.props.location.pathname })}
        </ReactCSSTransitionGroup>

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


class Animation_1 extends Component {
  render(){
    return (
      <div className="Image">128883

      </div>
    )
  }
}



class Animation_2 extends Component {
  render(){
    return (
      <div className="Image">456

      </div>
    )
  }
}

const Page1 = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Index}/>
        <Route path="page2" component={Page2}/>
        <Route path="page3" component={Page3}>
          <Route path="Animation_1" component={Animation_1}>

          <Route/>
          <Route path="Animation_2" component={Animation_2}/>
        </Route>

    </Route>
  </Router>

export default Page1;
