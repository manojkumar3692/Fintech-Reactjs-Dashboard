
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from "./module-counter";
export default combineReducers({
	routing: routerReducer,
	counter
})