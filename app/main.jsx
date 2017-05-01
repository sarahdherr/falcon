'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'

import { fetchBird } from './reducers/bird'
import { fetchUser } from './reducers/auth'
import { fetchWeight, fetchFeeding, fetchHunting, fetchHunt } from './reducers/log'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import ProfileContainer from './containers/ProfileContainer'
import LogContainer from './containers/LogContainer'
import Signup from './components/Signup'
import FalconSignup from './components/FalconSignup'
import Logout from './components/Logout'
import Hunt from './components/Hunt'

const onProfileEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchBird(nextRouterState.params.userId))
  .then(store.dispatch(fetchUser(nextRouterState.params.userId)))
  .then(done)
}

const onLogEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchBird(nextRouterState.params.userId))
  .then(store.dispatch(fetchWeight(nextRouterState.params.userId)))
  .then(store.dispatch(fetchFeeding(nextRouterState.params.userId)))
  .then(store.dispatch(fetchHunting(nextRouterState.params.userId)))
  .then(done)
}

const onHuntEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchHunt(nextRouterState.params.huntId))
  .then(done)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" component={ProfileContainer} onEnter={onProfileEnter} />
        <Route path="/log/:userId" component={LogContainer} onEnter={onLogEnter} />
        <Route path="/signup" component={Signup} />
        <Route path="/falcon-signup" component={FalconSignup} />
        <Route path='/logout' component={Logout} />
        <Route path='/hunt/:huntId' component={Hunt} onEnter={onHuntEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
