import axios from 'axios'
import { browserHistory } from 'react-router'

// const reducer = (state=null, action) => {
//   switch (action.type) {
  // case STOCK_BIRD:
  //   return action.bird
  // }
//   return state
// }

// const STOCK_BIRD = 'STOCK_BIRD'

// export const stockBird = bird => ({
//   type: STOCK_BIRD, bird
// })

// export const birdSignup = (falcon, user) =>
//   dispatch =>
//     axios.post('api/birds', {bird: falcon, user: user})
//       .then(response => {
//         dispatch(stockBird(response.data))
//         return response.data
//       })
//       .then(bird => browserHistory.push(`/profile/${bird.user_id}`))
//       .catch(err => console.error(err))

// export const fetchBird = (userId) =>
//   dispatch =>
//     axios.get(`/api/birds/${userId}`)
//       .then(response => dispatch(stockBird(response.data)))
//       .catch(err => console.error(err))

export const addWeight = (entry, birdId, userId) =>
  dispatch => {
    axios.post(`/api/logs/weight`, {entry: entry, birdId: birdId})
      .then(() => browserHistory.push(`/log/${userId}`))
      .catch(err => console.error(err))
  }

export const addFeeding = (entry, birdId, userId) =>
  dispatch => {
    axios.post(`/api/logs/feeding`, {entry: entry, birdId: birdId})
      .then(() => browserHistory.push(`/log/${userId}`))
      .catch(err => console.error(err))
  }

export const addHunting = (entry, birdId, userId) =>
  dispatch => {
    axios.post(`/api/logs/hunting`, {entry: entry, userId: userId})
      .then(() => browserHistory.push(`/log/${userId}`))
      .catch(err => console.error(err))
  }

// export default reducer
