import { combineReducers } from 'redux'
import counterReducer from './CountReducer'

const allReducer = combineReducers({
  counter: counterReducer
})

export default allReducer