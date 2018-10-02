import React from 'react'
import {Switch, Route} from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
