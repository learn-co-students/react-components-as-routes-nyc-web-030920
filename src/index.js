import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Messages from './Messages'

import { BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render((
  <Router>
    <div>     
        <Navbar /> 
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={SignUp} /> */}
    </div>
  </Router>),
  document.getElementById('root')
);
