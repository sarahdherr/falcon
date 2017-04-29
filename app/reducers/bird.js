import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch (action.type) {
  case STOCK_BIRD:
    return action.bird
  }
  return state
}

const STOCK_BIRD = 'STOCK_BIRD'

export const stockBird = bird => ({
  type: STOCK_BIRD, bird
})

export const birdSignup = (falcon, user) => 
  dispatch =>
    axios.post('api/birds', {bird: falcon, user: user})
      .then(response => {
        dispatch(stockBird(response.data))
      })
      .then(() => browserHistory.push('/profile'))
      .catch(err => console.error(err))

export const fetchBird = (userId) => 
  dispatch =>
    axios.get(`/api/birds/${userId}`)
      .then(response => dispatch(stockBird(response.data)))
      .catch(err => console.error(err))

export default reducer
