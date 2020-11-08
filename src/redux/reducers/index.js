import { combineReducers } from 'redux'
import users from './user'

const rootReducer = combineReducers({
  users: users
})

export default rootReducer