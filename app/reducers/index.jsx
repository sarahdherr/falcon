import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  bird: require('./bird').default
})

export default rootReducer
