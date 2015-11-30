import React from 'react'
import { Router, Route } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'

var routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="profile" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default routes
