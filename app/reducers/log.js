import axios from 'axios'
import { browserHistory } from 'react-router'

const initialState = {
  weights: [],
  feedings: [],
  hunts: [],
  hunt: {}
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case STOCK_WEIGHT:
    newState.weights = action.weights
    break
  case STOCK_FEEDING:
    newState.feedings = action.feedings
    break
  case STOCK_HUNTINGS:
    newState.hunts = action.huntings
    break
  case STOCK_HUNT:
    newState.hunt = action.hunt
    break
  }

  return newState
}

const STOCK_WEIGHT = 'STOCK_WEIGHT'
const STOCK_FEEDING = 'STOCK_FEEDING'
const STOCK_HUNTINGS = 'STOCK_HUNTINGS'
const STOCK_HUNT = 'STOCK_HUNT'

export const stockWeight = weights => ({
  type: STOCK_WEIGHT, weights
})

export const stockFeeding = feedings => ({
  type: STOCK_FEEDING, feedings
})

export const stockHunting = huntings => ({
  type: STOCK_HUNTINGS, huntings
})

export const stockHunt = hunt => ({
  type: STOCK_HUNT, hunt
})

export const fetchHunt = huntId =>
  dispatch =>
    axios.get(`/api/logs/hunt/${huntId}`)
      .then(response => dispatch(stockHunt(response.data)))
      .catch(err => console.error(err))

export const fetchWeight = userId =>
  dispatch =>
    axios.get(`/api/logs/weight/${userId}`)
      .then(response => dispatch(stockWeight(response.data)))
      .catch(err => console.error(err))

export const fetchFeeding = userId =>
  dispatch =>
    axios.get(`/api/logs/feeding/${userId}`)
      .then(response => dispatch(stockFeeding(response.data)))
      .catch(err => console.error(err))

export const fetchHunting = userId =>
  dispatch =>
    axios.get(`/api/logs/hunting/${userId}`)
      .then(response => dispatch(stockHunting(response.data)))
      .catch(err => console.error(err))

export const addWeight = (entry, birdId, userId) =>
  dispatch =>
    axios.post(`/api/logs/weight`, {entry: entry, userId: userId})
      .then(() => dispatch(fetchWeight(userId)))
      .catch(err => console.error(err))

export const addFeeding = (entry, birdId, userId) =>
  dispatch =>
    axios.post(`/api/logs/feeding`, {entry: entry, userId: userId})
      .then(() => dispatch(fetchFeeding(userId)))
      .catch(err => console.error(err))

export const addHunting = (entry, birdId, userId) =>
  dispatch =>
    axios.post(`/api/logs/hunting`, {entry: entry, userId: userId})
      .then(() => dispatch(fetchHunting(userId)))
      .catch(err => console.error(err))

export default reducer
