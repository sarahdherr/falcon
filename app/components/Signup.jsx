import React from 'react'

export const Signup = ({ signup }) => 
  (<div className='signup-page'>
    <h2>Sign Up</h2>
    <form onSubmit={ evt => {
      evt.preventDefault()
      const user = {
        name: evt.target.name.value,
        email: evt.target.email.value,
        username: evt.target.username.value,
        password: evt.target.password.value
      }
      signup(user)
      // console.log("User inforamtion: ", user)
    } }>
      <p className='signup-dir'>Please provide your information</p>
      <div className='signup-entry'>
        <label>Name:</label>
        <input className='normal-input' name='name' />
      </div>
      <div className='signup-entry'>
        <label>Email:</label>
        <input className='normal-input' name='email' />
      </div>
      <p className='signup-dir'>Please set up your account information.</p>
      <div className='signup-entry'>
        <label>Select a username:</label>
        <input className='normal-input' name='username' />
      </div>
      <div className='signup-entry'>
        <label>Set a password:</label>
        <input className='normal-input' name='password' type='password' />
      </div>
      <div className='signup-entry'>
        <button type='submit'>Sign up</button>
      </div>
    </form>
  </div>)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {signup},
)(Signup)
