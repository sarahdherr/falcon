import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  bird: require('./bird').default,
  log: require('./log').default
})

export default rootReducer
