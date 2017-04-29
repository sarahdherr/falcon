import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(user => browserHistory.push(`/profile/${user.id}`))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/login'))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
        return user
      })
      .catch(failed => dispatch(authenticated(null)))

export const signup = (user) =>
  dispatch =>
    axios.post('api/users', user)
      .then(response => {
        dispatch(authenticated(response.data))
      })
      .then(() => browserHistory.push('/falcon-signup'))
      .catch(failed => dispatch(authenticated(null)))

export const fetchUser = (userId) =>
  dispatch =>
    axios.get(`/api/users/${userId}`)
      .then(response => dispatch(authenticated(response.data)))
      .catch(err => console.error(err))

export default reducer
