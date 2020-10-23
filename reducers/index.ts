import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const AppReducer = combineReducers({
    todos,
    visibilityFilter
});

export default AppReducer
