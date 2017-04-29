import React from 'react'
import { Link } from 'react-router'

export const Login = ({ login }) => {
  return (
  <div className='login-page'>
    <div>
      <img className='col-lg-4 col-md-4 col-xs-4' src='http://lindsaywildlife.org/wp-content/uploads/2016/01/PEFA-03-Paul-Hara-07.31.15.jpg' />
    </div>
    <h1>Log into your account</h1>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <div>
        <label>Email:</label>
        <input className='normal-input' name='username' />
      </div>
      <div>
        <label>Password:</label>
        <input className='normal-input' name='password' type='password' />
      </div>
      <button type='submit'>Login</button>
    </form>
    <p>Or, <Link to='signup'>create an account</Link>.</p>
  </div>
  )
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
