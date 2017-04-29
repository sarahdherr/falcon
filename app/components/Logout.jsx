import React from 'react'
import { Link } from 'react-router'

export const Logout = ({ logout }) => {
  return (
  <div className='login-page'>
    <h1>Logout of your account.</h1>
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  </div>
  )
}

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({
    user: state.auth
  }),
  {logout},
)(Logout)
