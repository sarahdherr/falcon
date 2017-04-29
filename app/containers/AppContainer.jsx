import React from 'react'
import Navbar from '../components/Navbar'

export const App = (props) => {
  return (
    <div>
    <Navbar user={props.user}/>
    {
      props.children
    }
    </div>
  )
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({
    user: state.auth
  }),
  {},
)(App)
