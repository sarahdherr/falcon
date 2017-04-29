'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'

import {fetchBird} from './reducers/bird'
import {fetchUser} from './reducers/auth'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import ProfileContainer from './containers/ProfileContainer'
import Log from './components/Log'
import Signup from './components/Signup'
import FalconSignup from './components/FalconSignup'
import Logout from './components/Logout'

const onProfileEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchBird(nextRouterState.params.userId))
  .then(store.dispatch(fetchUser(nextRouterState.params.userId)))
  .then(done)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" component={ProfileContainer} onEnter={onProfileEnter} />
        <Route path="/log" component={Log} />
        <Route path="/signup" component={Signup} />
        <Route path="/falcon-signup" component={FalconSignup} />
        <Route path='/logout' component={Logout} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
