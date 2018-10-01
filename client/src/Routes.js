import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" render={Home} />
      <Route exact path="/signup" render={Signup} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
